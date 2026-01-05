
import { nexusBus } from './NexusCommandBus';
import { hardBlockEnforcer } from './HardBlockEnforcer';
import loggingService from './LoggingService';

export class ServiceContainer {
    private services = new Map<string, any>();
    private env: any;
    private ctx: any;

    constructor(env: any, ctx: any) {
        this.env = env;
        this.ctx = ctx;
        this.initializeCore();
    }

    private initializeCore() {
        this.register('logger', loggingService);
        this.register('nexus', nexusBus);
        this.register('security', hardBlockEnforcer);
    }

    register(name: string, service: any) {
        this.services.set(name, service);
    }

    get<T>(name: string): T {
        const service = this.services.get(name);
        if (!service) throw new Error(`Service ${name} not found`);
        return service as T;
    }
}
