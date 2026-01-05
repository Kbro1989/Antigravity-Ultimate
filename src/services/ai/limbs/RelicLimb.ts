import { NeuralLimb } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';
import { localBridgeClient } from '../../bridge/LocalBridgeService';
import { JagArchive } from '../../rsc/JagArchive';
// using global Buffer

export class RelicLimb extends NeuralLimb {
    async process(intent: any) {
        const { action } = intent;
        await this.logActivity(`relic_${action}`, 'pending');

        try {
            switch (action) {
                case 'excavate_cache':
                    this.enforceCapability(AgentCapability.READ_FILES);
                    const { id: cacheId = 0, major = 0, path: customPath } = intent.payload || {};

                    // Possible locations for Jagex Cache
                    const possibleRoots = [
                        customPath,
                        'C:/ProgramData/Jagex/RuneScape',
                        'C:/Program Files (x86)/Jagex Launcher',
                        'C:/Program Files (x86)/Jagex Launcher/Games/RuneScape',
                        process.env.APPDATA ? `${process.env.APPDATA}/Jagex/RuneScape` : null,
                        process.env.LOCALAPPDATA ? `${process.env.LOCALAPPDATA}/Jagex/RuneScape` : null
                    ].filter(Boolean);

                    let foundPath = "";
                    let content = null;

                    for (const root of possibleRoots) {
                        try {
                            // Check for classic cache or NXT jcache/index files
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

                    if (!foundPath) {
                        // Fallback: Check for NXT style cache if specified
                        console.warn("RelicLimb: Could not find classic cache root.");
                    }

                    return {
                        status: 'success',
                        excavationId: `relic_${Date.now()}`,
                        root: foundPath,
                        message: foundPath ? `Found cache at ${foundPath}` : "No local cache detected. Please ensure RSMV compatibility mode is active.",
                        timestamp: Date.now()
                    };
                case 'link_cache': {
                    this.enforceCapability(AgentCapability.READ_FILES);
                    const { path: cachePath } = intent.payload || {};
                    const { rsmv } = await import('../../rsmv');
                    const isModern = await rsmv.linkLocalCache(cachePath);

                    if (!isModern) {
                        // Check if it's a legacy JAG directory
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

                case 'salvage_relic': {
                    this.enforceCapability(AgentCapability.READ_FILES);
                    const { relicId, relicType } = intent.payload || {};

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
                        // Legacy salvage logic
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
                                const ui = await rsc.loadUI(relicId); // relicId is name for UI
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

                case 'read_record':
                    this.enforceCapability(AgentCapability.READ_FILES);
                    const { path: filePath, base64 } = intent.payload || {};
                    if (!filePath) throw new Error("Missing path for read_record");

                    const readResult = await localBridgeClient.readLocalFile(filePath, base64);
                    return {
                        status: readResult.success ? 'success' : 'error',
                        content: readResult.content,
                        error: readResult.error
                    };

                case 'modify_relic':
                    this.enforceCapability(AgentCapability.AI_INFERENCE);
                    const { id: modId, changes, currentData } = intent.payload || {};
                    const updatedData = { ...currentData, ...changes };

                    return {
                        status: 'success',
                        message: `Staged changes for model ${modId}. Use 'commit_cache' to persist.`,
                        stagedData: updatedData
                    };

                case 'commit_cache': {
                    this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
                    const { id: commitId, rawData: FinalData } = intent.payload || {};
                    const { rsmv } = await import('../../rsmv');
                    const saveSuccess = await rsmv.saveModel(parseInt(commitId), FinalData);

                    return {
                        status: saveSuccess ? 'success' : 'error',
                        message: saveSuccess ? `Successfully committed model ${commitId} to local cache.` : `Failed to save model ${commitId}.`
                    };
                }
                default:
                    throw new Error(`Unknown relic action: ${action}`);
            }
        } catch (e: any) {
            await this.logActivity(`relic_${action}`, 'failure', { error: e.message });
            return { status: 'error', error: e.message };
        }
    }
}

