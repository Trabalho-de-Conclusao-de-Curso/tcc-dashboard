import React from 'react';

import { Navigate } from 'react-router-dom';
import useAuth from '../contexts/auth/useAuth';

const AuthLayout: React.FC = ({ children }) => {
    const { logged } = useAuth();

    if (logged) return <Navigate to="/" />;

    return <div>{children}</div>;
};

export default AuthLayout;
