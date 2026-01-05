
export interface OllamaRequest {
    model: string;
    prompt: string;
    stream?: boolean;
    options?: Record<string, any>;
}

class OllamaProvider {
    private endpoint = 'http://localhost:11434/api';

    async textChat(prompt: string, model: string = 'llama3') {
        try {
            const response = await fetch(`${this.endpoint}/generate`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model,
                    prompt,
                    stream: false
                })
            });

            if (!response.ok) throw new Error(`Ollama failed: ${response.statusText}`);
            const data = await response.json() as any;
            return {
                text: data.response,
                model: model,
                provider: 'local'
            };
        } catch (e) {
            console.error('[Ollama] Local AI unreachable:', e);
            throw e;
        }
    }

    async codeComplete(prefix: string, suffix: string) {
        return this.textChat(`<PRE> ${prefix} <SUF> ${suffix} <MID>`, 'qwen2.5-coder');
    }

    async checkStatus() {
        try {
            const response = await fetch(`${this.endpoint}/tags`);
            return response.ok;
        } catch {
            return false;
        }
    }
}

export const ollamaProvider = new OllamaProvider();
export default ollamaProvider;
