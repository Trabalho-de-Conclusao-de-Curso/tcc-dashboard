import React, { createContext, useState, useEffect, useCallback } from 'react';

import { TypeInterests, TypeUser, TypeLoginData } from '../../models/auth';
import { authApi } from '../../services';

type AuthContextData = {
    user: TypeUser | null;
    logged: boolean;
    loading: boolean;
    editUser: (data: TypeUser, photo?: any) => Promise<boolean>;
    logout: () => void;
    login: () => void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const tokenKey = '@tccapp:token:';

    const [user, setUser] = useState<TypeUser | null>(null);
    const [loading, setLoading] = useState(false);
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        const loadStoragedData = async () => {
            setLoading(true);

            const userData = localStorage.getItem(tokenKey + 'userData');
            setUser(userData ? JSON.parse(userData) : null);

            setLoading(false);
        };

        loadStoragedData();
    }, []);

    useEffect(() => {
        setLogged(user !== null);
    }, [user]);

    const updateUser = async (newUser: TypeUser | null) => {
        localStorage.setItem(tokenKey + 'userData', JSON.stringify(newUser));
        setUser(newUser);
    };

    const editUser = useCallback(
        async (newUser: TypeUser, photo): Promise<boolean> => {
            let auxData = newUser;
            try {
                return Promise.resolve(true);
            } catch (err) {
                return Promise.resolve(false);
            }
        },
        []
    );

    const login = useCallback(async () => {
        try {
            setLoading(true);
            updateUser(null);
        } catch ({ message }) {
            console.log(`Login Error: ${message}`);
        } finally {
            setLoading(false);
        }
    }, []);

    const logout = useCallback(async () => {
        setLoading(true);

        await authApi.logout();

        updateUser(null);
        setLoading(false);
    }, []);

    //TODO: implements register
    const register = useCallback(async () => {}, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                logged,
                loading,
                editUser,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
