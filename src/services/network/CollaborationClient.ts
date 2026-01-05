/**
 * CollaborationClient.ts
 * Frontend client for real-time presence and sync.
 */

export type UserPresence = {
    id: string;
    name: string;
    cursor: { x: number; y: number } | null;
    activeTab: string;
    lastSeen: number;
};

export class CollaborationClient {
    private socket: WebSocket | null = null;
    private users: Record<string, UserPresence> = {};
    private onUpdate: (users: Record<string, UserPresence>) => void;

    constructor(onUpdate: (users: Record<string, UserPresence>) => void) {
        this.onUpdate = onUpdate;
    }

    public connect(roomId: string = 'default') {
        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        const host = window.location.host === 'localhost:5173' ? 'localhost:8787' : window.location.host;
        const url = `${protocol}//${host}/parties/collaboration/${roomId}`;

        console.log(`[CollaborationClient] Connecting to ${url}`);
        this.socket = new WebSocket(url);

        this.socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            this.handleMessage(data);
        };

        this.socket.onclose = () => {
            console.warn('[CollaborationClient] Disconnected. Retrying in 3s...');
            setTimeout(() => this.connect(roomId), 3000);
        };
    }

    private handleMessage(data: any) {
        switch (data.type) {
            case "init":
                this.users = data.users;
                break;
            case "presence_update":
                this.users[data.user.id] = data.user;
                break;
            case "user_left":
                delete this.users[data.userId];
                break;
        }
        this.onUpdate({ ...this.users });
    }

    public updatePresence(presence: Partial<UserPresence>) {
        if (this.socket?.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify({
                type: "presence",
                payload: presence
            }));
        }
    }

    public disconnect() {
        this.socket?.close();
        this.socket = null;
    }
}
