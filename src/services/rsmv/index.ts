import { IRSMVService, RSMVServiceConfig } from "./types";

/**
 * Lazy getters for the split pipelines
 */

export const getModernRSMV = (config?: RSMVServiceConfig): Promise<IRSMVService> => {
    return import("./modern/ModernRSMVService").then(m => new m.ModernRSMVService(config));
};

export const getClassicRSMV = (config?: RSMVServiceConfig): Promise<IRSMVService> => {
    return import("./classic/ClassicRSMVService").then(m => new m.ClassicRSMVService(config));
};

// Re-exports for legacy support if needed
export type { IRSMVService, RSMVServiceConfig };

// Compatibility exports
export const rsmv = {
    loadModel: async (id: number) => (await getModernRSMV()).loadModel(id),
    loadMap: async (id: number) => (await getModernRSMV()).loadMap(id),
    loadAudio: async (id: number) => (await getModernRSMV()).loadAudio(id),
    loadUI: async (name: string) => (await getModernRSMV()).loadUI(name)
} as any;

export const rscViewer = {
    loadModel: async (id: number) => (await getClassicRSMV()).loadModel(id),
    loadMap: async (id: number) => (await getClassicRSMV()).loadMap(id),
    loadAudio: async (id: number) => (await getClassicRSMV()).loadAudio(id),
    loadUI: async (name: string) => (await getClassicRSMV()).loadUI(name),
    getItems: async () => (await getClassicRSMV()).getItems()
} as any;
