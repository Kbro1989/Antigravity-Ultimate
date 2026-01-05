import { NeuralLimb } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';
import { localBridgeClient } from '../../bridge/LocalBridgeService';
import { BaseIntent } from '../AITypes';

export class RelicLimb extends NeuralLimb {
    async excavate_cache(params: any) {
        this.enforceCapability(AgentCapability.READ_FILES);
        const { id: cacheId = 0, major = 0, path: customPath } = params || {};

        const possibleRoots = [
            customPath,
            'C:/ProgramData/Jagex/RuneScape',
            'C:/Program Files (x86)/Jagex Launcher',
            'C:/Program Files (x86)/Jagex Launcher/Games/RuneScape',
            (process as any).env?.APPDATA ? `${(process as any).env.APPDATA}/Jagex/RuneScape` : null,
            (process as any).env?.LOCALAPPDATA ? `${(process as any).env.LOCALAPPDATA}/Jagex/RuneScape` : null
        ].filter(Boolean);

        let foundPath = "";

        for (const root of possibleRoots) {
            try {
                const indicators = ['main_file_cache.dat2', 'main_file_cache.dat', 'content_index.json'];
                for (const indicator of indicators) {
                    const testPath = `${root}/${indicator}`;
                    const stat = await localBridgeClient.statFile(testPath);
                    if (stat.success) {
                        foundPath = root as string;
                        break;
                    }
                }
                if (foundPath) break;
            } catch (e) { }
        }

        return {
            status: 'success',
            excavationId: `relic_${Date.now()}`,
            root: foundPath,
            message: foundPath ? `Found cache at ${foundPath}` : "No local cache detected. Please ensure RSMV compatibility mode is active.",
            timestamp: Date.now()
        };
    }

    async link_cache(params: any) {
        this.enforceCapability(AgentCapability.READ_FILES);
        const { path: cachePath } = params || {};
        const { rsmv } = await import('../../rsmv');
        const isModern = await rsmv.linkLocalCache(cachePath);

        if (!isModern) {
            const jagFiles = await localBridgeClient.listDirectory(cachePath);
            const hasJag = jagFiles.files?.some(f => f.name.endsWith('.jag'));
            if (hasJag) {
                return { status: 'success', type: 'legacy_rsc', message: 'Legacy RSC Archive Linked' };
            }
        }

        return {
            status: isModern ? 'success' : 'error',
            type: isModern ? 'modern_nxt' : 'unknown',
            message: isModern ? 'Modern NXT Cache Linked' : 'No compatible cache found at path'
        };
    }

    async salvage_relic(params: any) {
        this.enforceCapability(AgentCapability.READ_FILES);
        const { relicId, relicType } = params || {};

        if (relicType === 'modern') {
            const { rsmv } = await import('../../rsmv');
            const modelId = parseInt(relicId);
            const model = await rsmv.loadModel(modelId);
            await this.persistAsset('mesh', `rsmv://${relicId}`, {
                source: 'rsmv',
                id: relicId,
                name: model.name || `Model ${relicId}`
            });
            return { status: 'success', asset: model };
        } else {
            const { getClassicRSMV } = await import('../../rsmv');
            const rsc = await getClassicRSMV();
            const salvageId = parseInt(relicId);

            switch (relicType) {
                case 'audio': {
                    const audio = await rsc.loadAudio(salvageId);
                    await this.persistAsset('audio', `rsc://audio_${relicId}`, { source: 'rsc', id: relicId });
                    return { status: 'success', asset: audio };
                }
                case 'map': {
                    const map = await rsc.loadMap(salvageId);
                    await this.persistAsset('legacy_map', `rsc://map_${relicId}`, { source: 'rsc', id: relicId });
                    return { status: 'success', asset: map };
                }
                case 'ui': {
                    const ui = await rsc.loadUI(relicId);
                    await this.persistAsset('image', `rsc://ui_${relicId}`, { source: 'rsc', id: relicId });
                    return { status: 'success', asset: ui };
                }
                default: {
                    const archiveId = relicId || 'config.jag';
                    await this.persistAsset('legacy_archive', `rsc://${archiveId}`, {
                        source: 'rsc',
                        id: archiveId
                    });
                    return { status: 'success', type: 'rsc_salvage' };
                }
            }
        }
    }

    async read_record(params: any) {
        this.enforceCapability(AgentCapability.READ_FILES);
        const { path: filePath, base64 } = params || {};
        if (!filePath) throw new Error("Missing path for read_record");

        const readResult = await localBridgeClient.readLocalFile(filePath, base64);
        return {
            status: readResult.success ? 'success' : 'error',
            content: readResult.content,
            error: readResult.error
        };
    }

    async modify_relic(params: any) {
        this.enforceCapability(AgentCapability.AI_INFERENCE);
        const { id: modId, changes, currentData } = params || {};
        const updatedData = { ...currentData, ...changes };

        return {
            status: 'success',
            message: `Staged changes for model ${modId}. Use 'commit_cache' to persist.`,
            stagedData: updatedData
        };
    }

    async commit_cache(params: any) {
        this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
        const { id: commitId, rawData: FinalData } = params || {};
        const { rsmv } = await import('../../rsmv');
        const saveSuccess = await rsmv.saveModel(parseInt(commitId), FinalData);

        return {
            status: saveSuccess ? 'success' : 'error',
            message: saveSuccess ? `Successfully committed model ${commitId} to staged storage.` : `Failed to save model ${commitId}.`
        };
    }

    async fork_relic(params: any) {
        this.enforceCapability(AgentCapability.WRITE_FILES);
        const { id: assetId, type, content } = params || {};
        const stagedPath = `C:\\Users\\Destiny\\Desktop\\New folder\\POG-Ultimate\\staged_assets\\${type}s\\${assetId}`;

        await localBridgeClient.writeLocalFile(stagedPath, content, true);
        return {
            status: 'success',
            forkUrl: `staged://${type}/${assetId}`,
            message: `Relic forked to playground: ${stagedPath}`
        };
    }

    async scan_game_needs(params: any) {
        this.enforceCapability(AgentCapability.READ_FILES);
        const { category } = params || {};
        const refRoot = 'C:/Users/Destiny/Desktop/New folder/POG-Ultimate/reference';
        const rscDataPath = `${refRoot}/rsc-cloudflare/rsc-data`;

        let targetPath = rscDataPath;
        if (category === 'locations') targetPath += '/locations';
        else if (category === 'config') targetPath += '/config';
        else if (category === 'ids') targetPath += '/ids';

        try {
            const list = await localBridgeClient.listDirectory(targetPath);
            return {
                status: list.success ? 'success' : 'error',
                category,
                items: list.files || [],
                path: targetPath,
                error: list.error
            };
        } catch (e: any) {
            return { status: 'error', message: e.message };
        }
    }

    async fetch_relic_content(params: any) {
        this.enforceCapability(AgentCapability.READ_FILES);
        const { path: relativePath, category } = params || {};
        const refRoot = 'C:/Users/Destiny/Desktop/New folder/POG-Ultimate/reference';
        const rscDataPath = `${refRoot}/rsc-cloudflare/rsc-data`;

        let fullPath = `${rscDataPath}/${category ? category + '/' : ''}${relativePath}`;

        // Sanity check to prevent directory traversal
        if (!fullPath.startsWith(refRoot)) {
            return { status: 'error', message: 'Access Denied: Path outside reference root.' };
        }

        // If it's a directory, we can't really "fork" it as a single file, so we check stats first
        try {
            const stat = await localBridgeClient.statFile(fullPath);
            if (!stat.success) return { status: 'error', message: 'File not found' };

            if (stat.stats?.isDirectory) {
                return { status: 'error', message: 'Target is a directory, select specific files.' };
            }

            const read = await localBridgeClient.readLocalFile(fullPath);
            return {
                status: read.success ? 'success' : 'error',
                content: read.content,
                path: fullPath,
                error: read.error
            };

        } catch (e: any) {
            return { status: 'error', message: e.message };
        }
    }
}
