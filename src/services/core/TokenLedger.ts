/**
 * TokenLedger.ts
 * Manages system-wide token economics as mandated in Phase 8.
 */

export const SYSTEM_TOKEN_CAP = 2_000_000;

class TokenLedger {
    private ledger: Record<string, number> = {};

    public debit(agentId: string, tokens: number) {
        this.ledger[agentId] = (this.ledger[agentId] || 0) + tokens;

        const total = this.getTotalUsage();
        if (total > SYSTEM_TOKEN_CAP) {
            console.error(`[TokenLedger] CRITICAL: System token cap exceeded (${total} > ${SYSTEM_TOKEN_CAP})`);
            // In a real scenario, this would trigger a halt signal to all Durable Objects
        }
    }

    public getUsage(agentId: string): number {
        return this.ledger[agentId] || 0;
    }

    public getTotalUsage(): number {
        return Object.values(this.ledger).reduce((sum, val) => sum + val, 0);
    }

    public reset() {
        this.ledger = {};
    }
}

export const tokenLedger = new TokenLedger();
