export class SessionService {
    isOverQuota(): boolean {
        return false;
    }
}

const sessionService = new SessionService();
export default sessionService;
