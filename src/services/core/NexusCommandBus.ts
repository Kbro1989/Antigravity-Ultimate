
export interface NexusJob {
    id: string;
    type: 'ai' | 'build' | 'pipeline' | 'long_running' | 'workflow' | 'rsmv_compile';
    priority: 'reflex' | 'thought'; // Reflex = High, Thought = Normal
    description: string;
    abortController: AbortController;
    startTime: number;
    metadata?: any;
}

class NexusCommandBus {
    private jobRegistry: Map<string, NexusJob> = new Map();
    private env: 'dev' | 'prod' = 'dev';
    private aiMode: 'assist' | 'co-pilot' | 'autonomous' | 'read-only' = 'assist';
    private listeners: ((action: any) => void)[] = [];
    private MEMORY_KEY = 'nexus_spine_memory';

    constructor() {
        this.restoreMemory();
        // Auto-save every 5 seconds
        if (typeof window !== 'undefined') {
            setInterval(() => this.saveMemory(), 5000);
        }

        // --- SPINAL REFLEX ARC ---
        // Automatically route pain signals to Proprioception
        this.subscribe((event) => {
            if (event.type === 'REFLEX_PAIN') {
                console.warn('[NEXUS_SPINE] Reflex Arc Triggered:', event.payload);
                // TODO: Integrate with ContextService when available
                // import('./ai/contextService').then(({ contextService }) => {
                //     contextService.recordReflexPain(
                //         event.payload.provider || 'unknown',
                //         event.payload.severity === 'reflex' ? 0.8 : 0.4
                //     );
                // });
            }
        });
    }

    setEnv(env: 'dev' | 'prod') { this.env = env; }
    setAiMode(mode: any) { this.aiMode = mode; }

    registerJob(job: Omit<NexusJob, 'startTime' | 'priority'> & { priority?: 'reflex' | 'thought' }): NexusJob {
        const fullJob: NexusJob = {
            ...job,
            priority: job.priority || 'thought',
            startTime: Date.now()
        };

        this.jobRegistry.set(job.id, fullJob);
        this.notify({ type: 'JOB_REGISTERED', payload: fullJob });
        this.saveMemory(); // Reflex save
        return fullJob;
    }

    completeJob(id: string) {
        this.jobRegistry.delete(id);
        this.notify({ type: 'JOB_COMPLETED', payload: id });
        this.saveMemory();
    }

    clearCompletedJobs() {
        this.jobRegistry.forEach((job, id) => {
            if (job.priority !== 'reflex') {
                job.abortController.abort();
                this.jobRegistry.delete(id);
            }
        });
        this.notify({ type: 'JOBS_FLUSHED' });
        this.saveMemory();
    }

    panic() {
        console.warn('[NEXUS_PANIC] TERMINATING ALL JOBS');
        this.jobRegistry.forEach(job => {
            job.abortController.abort();
        });
        this.jobRegistry.clear();
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.removeItem(this.MEMORY_KEY); // Wipe memory
        }
        this.notify({ type: 'PANIC_TRIGGERED' });
    }

    dispatchEvent(type: string, payload?: any) {
        this.notify({ type, payload });
    }

    publish(action: { type: string;[key: string]: any }) {
        this.notify(action);
    }

    private notify(action: any) {
        this.listeners.forEach(l => l(action));
    }

    subscribe(listener: (action: any) => void) {
        this.listeners.push(listener);
        return () => { this.listeners = this.listeners.filter(l => l !== listener); };
    }

    getJobs() { return Array.from(this.jobRegistry.values()); }

    // --- Spine Memory (Persistence) ---
    private saveMemory() {
        if (typeof window === 'undefined' || !window.localStorage) return;
        const jobs = Array.from(this.jobRegistry.values()).map(j => ({
            ...j,
            abortController: undefined // Cannot serialize AbortController
        }));
        localStorage.setItem(this.MEMORY_KEY, JSON.stringify(jobs));
    }

    private restoreMemory() {
        if (typeof window === 'undefined' || !window.localStorage) return;
        const saved = localStorage.getItem(this.MEMORY_KEY);
        if (saved) {
            try {
                const jobs = JSON.parse(saved);
                jobs.forEach((j: any) => {
                    this.jobRegistry.set(j.id, {
                        ...j,
                        abortController: new AbortController() // Resurrect the nerve
                    });
                });
                console.log(`[NexusSpine] Restored ${jobs.length} jobs from memory.`);
            } catch (e) {
                console.error('[NexusSpine] Memory Restore Failed', e);
            }
        }
    }
}

export const nexusBus = new NexusCommandBus();
