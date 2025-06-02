'use client';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store';
import AuthProvider from './contexts/AuthProvider';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
            <ReduxProvider store={store}>
                {children}
            </ReduxProvider>
        </AuthProvider>
    );
}
