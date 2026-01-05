
export const contextService = {
    recordReflexPain: (provider: string, severity: number) => {
        console.log(`[Context] Reflex Pain: ${provider} (${severity})`);
    },
    getCurrentContext: () => "General Development"
};
