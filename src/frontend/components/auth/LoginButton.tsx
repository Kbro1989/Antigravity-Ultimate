import React, { useState, useEffect } from 'react';
import { googleAuthService } from '../../../services/auth/GoogleAuthService';

export const LoginButton: React.FC = () => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const handleAuthSuccess = (event: CustomEvent) => {
            setUser(event.detail);
        };

        window.addEventListener('google-auth-success', handleAuthSuccess as EventListener);

        return () => {
            window.removeEventListener('google-auth-success', handleAuthSuccess as EventListener);
        };
    }, []);

    const handleSignIn = () => {
        googleAuthService.signIn();
    };

    if (user) {
        return (
            <div className="flex items-center space-x-2">
                {user.picture && <img src={user.picture} alt={user.name} className="w-8 h-8 rounded-full" />}
                <span className="text-white text-sm">{user.name}</span>
            </div>
        );
    }

    return (
        <button
            onClick={handleSignIn}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
            Sign in with Google
        </button>
    );
};
