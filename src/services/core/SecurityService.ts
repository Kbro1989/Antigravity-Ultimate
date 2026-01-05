/**
 * SecurityService - Enterprise-Grade Security Layer
 * Rate limiting, input validation, path sanitization, and audit logging
 * Inspired by recreation pass architecture v5.0
 */

export interface ValidationResult {
    allowed: boolean;
    userId: string | null;
    ip: string | null;
    reason?: string;
}

export interface RateLimitResult {
    allowed: boolean;
    remaining: number;
    retryAfter?: number;
}

export interface AuditEntry {
    userId: string;
    action: string;
    resource?: string;
    result: 'success' | 'failure' | 'denied';
    ip?: string;
    timestamp: Date;
    details?: Record<string, unknown>;
}

// In-memory rate limit store (use KV in production)
const rateLimitStore = new Map<string, { count: number; reset: number }>();

// In-memory audit log (use D1 in production)
const auditLog: AuditEntry[] = [];

// Blocked patterns for path traversal prevention
const BLOCKED_PATTERNS = [
    /\.\.\//,           // Path traversal
    /~\/\.ssh\//,       // SSH keys
    /\.env\.*/,         // Environment files
    /node_modules\//,   // Dependencies
    /\.git\//           // Git internals
];

// Allowed file extensions
const ALLOWED_EXTENSIONS = new Set([
    '.ts', '.tsx', '.js', '.jsx', '.py', '.json',
    '.md', '.glsl', '.wgsl', '.toml', '.yaml', '.css', '.html'
]);

export class SecurityService {
    private maxRequestsPerMinute = 60;
    private windowMs = 60000; // 1 minute

    /**
     * Validate an incoming request
     */
    async validateRequest(request: Request): Promise<ValidationResult> {
        const result: ValidationResult = {
            allowed: false,
            userId: null,
            ip: request.headers.get('CF-Connecting-IP') ||
                request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim() ||
                'unknown'
        };

        // 1. Check for blocked IPs (extensible)
        if (await this.isBlockedIP(result.ip)) {
            result.reason = 'blocked_ip';
            await this.logSecurityEvent('blocked_ip_access', result.ip);
            return result;
        }

        // 2. Extract user ID from auth header or token
        const authHeader = request.headers.get('Authorization');
        if (authHeader?.startsWith('Bearer ')) {
            try {
                // In production, verify JWT
                const token = authHeader.substring(7);
                result.userId = this.extractUserIdFromToken(token);
                result.allowed = true;
            } catch (e) {
                result.reason = 'invalid_token';
                await this.logSecurityEvent('auth_failure', result.ip, { error: (e as Error).message });
            }
        } else {
            // Allow anonymous for some endpoints, or require auth
            result.userId = `anon-${result.ip}`;
            result.allowed = true;
        }

        return result;
    }

    /**
     * Check rate limit for a user
     */
    async checkRateLimit(userId: string, resource: string = 'api'): Promise<RateLimitResult> {
        const key = `rl:${userId}:${resource}`;
        const now = Date.now();

        let limit = rateLimitStore.get(key);

        if (!limit || now > limit.reset) {
            // Create new window
            limit = { count: 1, reset: now + this.windowMs };
            rateLimitStore.set(key, limit);
            return { allowed: true, remaining: this.maxRequestsPerMinute - 1 };
        }

        if (limit.count >= this.maxRequestsPerMinute) {
            const retryAfter = Math.ceil((limit.reset - now) / 1000);
            await this.logSecurityEvent('rate_limit_exceeded', userId);
            return { allowed: false, remaining: 0, retryAfter };
        }

        limit.count++;
        return { allowed: true, remaining: this.maxRequestsPerMinute - limit.count };
    }

    /**
     * Sanitize and validate a file path
     */
    sanitizePath(path: string, baseDir: string = ''): { valid: boolean; path?: string; error?: string } {
        // 1. Check for blocked patterns
        for (const pattern of BLOCKED_PATTERNS) {
            if (pattern.test(path)) {
                return { valid: false, error: 'Path contains blocked pattern' };
            }
        }

        // 2. Normalize path
        const normalized = path.replace(/\\/g, '/').replace(/\/+/g, '/');

        // 3. Check extension
        const ext = this.getExtension(normalized);
        if (ext && !ALLOWED_EXTENSIONS.has(ext)) {
            return { valid: false, error: `Extension not allowed: ${ext}` };
        }

        // 4. Ensure within base directory (if provided)
        if (baseDir) {
            const resolvedPath = this.resolvePath(baseDir, normalized);
            if (!resolvedPath.startsWith(baseDir)) {
                return { valid: false, error: 'Path traversal detected' };
            }
            return { valid: true, path: resolvedPath };
        }

        return { valid: true, path: normalized };
    }

    /**
     * Log an audit entry
     */
    async log(userId: string, action: string, details?: Record<string, unknown>): Promise<void> {
        const entry: AuditEntry = {
            userId,
            action,
            result: 'success',
            timestamp: new Date(),
            details
        };

        auditLog.push(entry);

        // In production, persist to D1
        console.log(`[Audit] ${userId}: ${action}`, details || '');
    }

    /**
     * Get recent audit entries
     */
    getRecentAuditEntries(limit: number = 100): AuditEntry[] {
        return auditLog.slice(-limit);
    }

    /**
     * Log a security event
     */
    private async logSecurityEvent(eventType: string, ip: string | null, details?: Record<string, unknown>): Promise<void> {
        console.warn(`[Security] ${eventType} from ${ip}`, details || '');

        // In production, persist to security_events table
        auditLog.push({
            userId: 'system',
            action: `security.${eventType}`,
            ip: ip || undefined,
            result: 'denied',
            timestamp: new Date(),
            details
        });
    }

    /**
     * Check if IP is blocked (extensible)
     */
    private async isBlockedIP(ip: string | null): Promise<boolean> {
        // In production, check against KV or D1
        return false;
    }

    /**
     * Extract user ID from token (simplified)
     */
    private extractUserIdFromToken(token: string): string {
        // In production, verify JWT signature
        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            return payload.sub || payload.userId || 'unknown';
        } catch {
            return `token-${token.substring(0, 8)}`;
        }
    }

    /**
     * Get file extension
     */
    private getExtension(path: string): string | null {
        const match = path.match(/\.[^.]+$/);
        return match ? match[0].toLowerCase() : null;
    }

    /**
     * Resolve path (simple implementation)
     */
    private resolvePath(base: string, path: string): string {
        if (path.startsWith('/')) {
            return path;
        }
        return `${base}/${path}`.replace(/\/+/g, '/');
    }
}

// Singleton export
export const securityService = new SecurityService();
