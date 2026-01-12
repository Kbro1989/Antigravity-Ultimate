import { NeuralLimb, LimbConfig } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';
import { BaseIntent } from '../AITypes';

export class FileLimb extends NeuralLimb {
    async read(params: any) {
        this.enforceCapability(AgentCapability.READ_FILES);
        const { path } = params;
        await this.logActivity('file_read', 'pending', { path });

        if (this.env?.ASSETS_BUCKET) {
            const obj = await this.env.ASSETS_BUCKET.get(path);
            if (obj) {
                const content = await obj.text();
                await this.logActivity('file_read', 'success', { path });
                return { success: true, content };
            }
        }

        throw new Error(`Cloud Artifact not found: ${path}`);
    }

    async write(params: any) {
        this.enforceCapability(AgentCapability.WRITE_FILES);
        const { path, content } = params;
        await this.logActivity('file_write', 'pending', { path });

        if (this.env?.ASSETS_BUCKET) {
            await this.env.ASSETS_BUCKET.put(path, content);
            await this.logActivity('file_write', 'success', { path });
            return { success: true };
        }

        throw new Error("Cloud Storage (R2) unavailable for write.");
    }

    async list(params: any) {
        this.enforceCapability(AgentCapability.READ_FILES);
        const { path = '' } = params;
        await this.logActivity('file_list', 'pending', { path });

        if (this.env?.ASSETS_BUCKET) {
            const list = await this.env.ASSETS_BUCKET.list({ prefix: path });
            const files = list.objects.map(o => o.key);
            await this.logActivity('file_list', 'success', { path, count: files.length });
            return files;
        }

        return [];
    }

    async delete(params: any) {
        this.enforceCapability(AgentCapability.DELETE_FILES);
        const { path } = params;
        await this.logActivity('file_delete', 'pending', { path });

        if (this.env?.ASSETS_BUCKET) {
            await this.env.ASSETS_BUCKET.delete(path);
            await this.logActivity('file_delete', 'success', { path });
            return { success: true };
        }

        throw new Error("Cloud Storage (R2) unavailable for delete.");
    }

    async sync(params: any) {
        this.enforceCapability(AgentCapability.WRITE_FILES);
        await this.logActivity('file_sync', 'pending', params);
        return { status: 'synced_to_cloud' };
    }
}

