import { useState, useCallback } from 'react';

export type NotificationType = 'info' | 'success' | 'warning' | 'error';

export interface Notification {
    id: string;
    type: NotificationType;
    message: string;
}

export function useNotification() {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const addNotification = useCallback((type: NotificationType, message: string) => {
        const id = Math.random().toString(36).substring(7);
        const newNotification = { id, type, message };

        setNotifications(prev => [...prev, newNotification]);
        console.log(`[Notification] ${type.toUpperCase()}: ${message}`);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            setNotifications(prev => prev.filter(n => n.id !== id));
        }, 5000);
    }, []);

    const removeNotification = useCallback((id: string) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    }, []);

    return {
        notifications,
        addNotification,
        removeNotification
    };
}
