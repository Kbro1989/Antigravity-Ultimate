import { GOOGLE_AUTH_CONFIG } from '../../config/auth';

declare global {
    interface Window {
        google: any;
    }
}

class GoogleAuthService {
    private tokenClient: any;
    private user: any = null;

    constructor() {
        this.loadScript();
    }

    private loadScript() {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        script.onload = () => this.initialize();
        document.body.appendChild(script);
    }

    private initialize() {
        if (window.google) {
            this.tokenClient = window.google.accounts.oauth2.initTokenClient({
                client_id: GOOGLE_AUTH_CONFIG.clientId,
                scope: GOOGLE_AUTH_CONFIG.scopes.join(' '),
                callback: (response: any) => this.handleTokenResponse(response),
            });
        }
    }

    private handleTokenResponse(response: any) {
        if (response.access_token) {
            console.log('Access Token received:', response.access_token);
            // Verify token and get user info
            this.fetchUserInfo(response.access_token);
        }
    }

    private async fetchUserInfo(accessToken: string) {
        try {
            const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            this.user = await response.json();
            console.log('User Info:', this.user);
            // Dispatch a custom event or use a state management library to update UI
            window.dispatchEvent(new CustomEvent('google-auth-success', { detail: this.user }));
        } catch (error) {
            console.error('Error fetching user info:', error);
        }
    }

    public signIn() {
        if (this.tokenClient) {
            this.tokenClient.requestAccessToken();
        } else {
            console.error('Google Identity Services not initialized yet.');
        }
    }

    public getUser() {
        return this.user;
    }
}

export const googleAuthService = new GoogleAuthService();
