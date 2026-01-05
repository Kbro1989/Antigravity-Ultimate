import React from 'react';
import ReactDOM from 'react-dom/client';
import { POGDashboard } from './components/hub/POGDashboard';

function TestApp() {
    return <POGDashboard />;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <TestApp />
    </React.StrictMode>,
)
