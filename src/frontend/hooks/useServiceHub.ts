/**
 * useServiceHub - React Hook for Service Access
 * Provides typed access to all POG services in React components
 */

import { useState, useEffect, useCallback } from 'react';
import ServiceHub from '../../services/ServiceHub';
import type { BridgeStatus } from '../../services/bridge';

interface ServiceHubState {
    bridgeStatus: BridgeStatus;
    quotaMetrics: {
        cloudflareUsed: number;
        cloudflareLimit: number;
        geminiSpent: number;
        geminiLimit: number;
        savingsEstimate: number;
    } | null;
    circuitStates: Record<string, { state: string; failures: number }>;
    isLoading: boolean;
}

export function useServiceHub(userId: string = 'default-user') {
    const [state, setState] = useState<ServiceHubState>({
        bridgeStatus: { isConnected: false, isCloudMode: true, syncMode: 'dual' as any },
        quotaMetrics: null,
        circuitStates: {},
        isLoading: true
    });

    // Poll for status updates
    useEffect(() => {
        const updateStatus = async () => {
            try {
                const bridgeStatus = ServiceHub.bridge.getStatus();
                // Cost management is currently aliased/integrated differently on frontend
                const quotaMetrics = null; // To be re-implemented via new endpoint if needed
                const circuitStates = {}; // Circuit breaker moved to backend internal

                setState({
                    bridgeStatus,
                    quotaMetrics,
                    circuitStates,
                    isLoading: false
                });
            } catch (e) {
                console.error('[useServiceHub] Error:', e);
            }
        };

        updateStatus();
        const interval = setInterval(updateStatus, 5000);
        return () => clearInterval(interval);
    }, [userId]);

    // AI Operations
    const chat = useCallback(async (prompt: string, history: any[] = []) => {
        return ServiceHub.ai.chat(prompt, history);
    }, []);

    const generateImage = useCallback(async (prompt: string) => {
        return ServiceHub.ai.image(prompt);
    }, []);

    const generateSpeech = useCallback(async (text: string) => {
        return ServiceHub.ai.speech(text);
    }, []);

    const generateVideo = useCallback(async (prompt: string) => {
        return ServiceHub.ai.video(prompt);
    }, []);

    // Code Operations
    const codeComplete = useCallback(async (prefix: string, suffix: string, filename: string) => {
        return ServiceHub.ai.codeComplete(prefix, suffix, filename);
    }, []);

    const auditCode = useCallback(async (code: string, filename: string) => {
        return ServiceHub.ai.audit(code, filename);
    }, []);

    // Bridge Operations
    const readFile = useCallback(async (path: string) => {
        return ServiceHub.bridge.readFile(path);
    }, []);

    const writeFile = useCallback(async (path: string, content: string) => {
        return ServiceHub.bridge.writeFile(path, content);
    }, []);

    const runCommand = useCallback(async (command: string) => {
        return ServiceHub.bridge.runCommand(command);
    }, []);

    // Neural Limbs
    const callLimb = useCallback(async (limbId: string, capability: string, params: any) => {
        return ServiceHub.limbs.call(limbId, capability, params);
    }, []);

    const initClassicPipeline = useCallback(async () => {
        return ServiceHub.initClassicPipeline();
    }, []);

    const initModernPipeline = useCallback(async () => {
        return ServiceHub.initModernPipeline();
    }, []);

    return {
        ...state,
        // AI
        chat,
        generateImage,
        generateSpeech,
        generateVideo,
        codeComplete,
        auditCode,
        // Bridge
        readFile,
        writeFile,
        runCommand,
        // Limbs
        callLimb,
        limbs: ServiceHub.limbs,
        // Pipeline Init
        initClassicPipeline,
        initModernPipeline,
        // Direct access
        stats: ServiceHub.stats,
        rsmv: ServiceHub.rsmv,
        hub: ServiceHub
    };
}


export default useServiceHub;
