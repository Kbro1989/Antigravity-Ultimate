
export const validatePrompt = (prompt: string): { isValid: boolean; error?: string; sanitized?: string } => {
    if (!prompt) return { isValid: false, error: 'Empty prompt' };

    // Basic checks
    if (prompt.length > 100000) return { isValid: false, error: 'Prompt too long' };

    // Code injection checks
    if (/system\s*\(/.test(prompt) || /child_process/.test(prompt)) {
        return { isValid: false, error: 'Potential code injection' };
    }

    return { isValid: true, sanitized: prompt };
};

export const sanitizeAIInput = (input: string) => input;
