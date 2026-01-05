import { useStateManager } from './StateManager';
import { cloudflareProvider } from '../ai/providers/CloudflareProvider';
import { ollamaProvider } from '../ai/providers/OllamaProvider';
export { WorkspaceMode } from '../../types/workspace';

export type AIMode = 'online' | 'offline' | 'hybrid';

export class ModeManager {
    static getInstance() {
        if (!(window as any)._modeManager) {
            (window as any)._modeManager = new ModeManager();
        }
        return (window as any)._modeManager;
    }

    async routeRequest(request: any) {
        const { mode } = useStateManager.getState();

        console.log(`[ModeManager] Routing request in ${mode} mode`);

        switch (mode) {
            case 'offline':
                return ollamaProvider.textChat(request.prompt);

            case 'hybrid':
                // Smart routing: if it's a simple task, use local. If complex, use online.
                if (request.prompt.length < 100) {
                    console.log('[ModeManager] Task simple. Routing to Local AI.');
                    return ollamaProvider.textChat(request.prompt);
                }
                return cloudflareProvider.textChat(request);

            case 'online':
            default:
                return cloudflareProvider.textChat(request);
        }
    }
}

export const modeManager = ModeManager.getInstance();
export default modeManager;
