import React from 'react';

import { AuthProvider } from './contexts/auth';
import { DataProvider } from './contexts/data';
import { UiProvider } from './contexts/ui';

const AppProviders: React.FC = ({ children }) => {
    return (
        <UiProvider>
            <AuthProvider>
                <DataProvider>{children}</DataProvider>
            </AuthProvider>
        </UiProvider>
    );
};

export default AppProviders;
