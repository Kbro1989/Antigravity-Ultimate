import { useState, useEffect, useRef } from 'react';
import { CollaborationClient, UserPresence } from '../../services/network/CollaborationClient';

/**
 * usePresence Hook
 * Hooks into the CollaborationClient to provide real-time user presence.
 */
export function usePresence(roomId: string = 'global') {
    const [users, setUsers] = useState<Record<string, UserPresence>>({});
    const clientRef = useRef<CollaborationClient | null>(null);

    useEffect(() => {
        const client = new CollaborationClient((updatedUsers) => {
            setUsers(updatedUsers);
        });

        client.connect(roomId);
        clientRef.current = client;

        const handleMouseMove = (e: MouseEvent) => {
            client.updatePresence({
                cursor: { x: e.clientX, y: e.clientY }
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            client.disconnect();
        };
    }, [roomId]);

    const updateTab = (tab: string) => {
        clientRef.current?.updatePresence({ activeTab: tab });
    };

    return { users, updateTab };
}
