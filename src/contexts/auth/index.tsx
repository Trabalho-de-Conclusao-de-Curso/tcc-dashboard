import React, { createContext, useState, useEffect, useCallback } from 'react';
import jwtDecode from 'jwt-decode';

import {
    TypeUser,
    TypeLoginData,
    TypeToken,
    TypeRegisterData,
    TypeRegisterRes,
} from '../../models/auth';
import { authApi } from '../../services';
import api from '../../services/api';

type AuthContextData = {
    user: TypeUser | null;
    logged: boolean;
    loading: boolean;
    editUser: (data: TypeUser, photo?: any) => Promise<boolean>;
    logout: () => void;
    login: (data: TypeLoginData) => void;
    register: (data: TypeRegisterData) => Promise<TypeRegisterRes>;
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

            const token = localStorage.getItem(tokenKey + 'authToken');

            if (validateToken(token)) {
                api.defaults.headers.common['Authorization'] = token;

                const userData = localStorage.getItem(tokenKey + 'userData');
                setUser(userData ? JSON.parse(userData) : null);
            } else updateUser(null, null);

            setLoading(false);
        };

        loadStoragedData();
    }, []);

    useEffect(() => {
        setLogged(user !== null);
    }, [user]);

    const updateUser = async (
        newUser: TypeUser | null,
        token?: string | null
    ) => {
        localStorage.setItem(tokenKey + 'userData', JSON.stringify(newUser));

        if (token !== undefined) {
            localStorage.setItem(tokenKey + 'authToken', JSON.stringify(token));
            api.defaults.headers.common['Authorization'] = token;
        }

        setUser(newUser);
    };

    const editUser = useCallback(
        async (
            newUser: TypeUser,
            photo: File | undefined
        ): Promise<boolean> => {
            let auxData = newUser;
            try {
                if (photo) {
                    const formData = new FormData();
                    formData.append('image', photo, photo.name);
                    const { data } = await authApi.changePhoto(formData);
                    auxData.logo = data;
                }

                await authApi.editUser(auxData);

                updateUser(auxData);

                return Promise.resolve(true);
            } catch (err) {
                return Promise.resolve(false);
            }
        },
        []
    );

    const login = useCallback(async (data: TypeLoginData) => {
        try {
            setLoading(true);

            const {
                data: { token, userData },
            } = await authApi.login(data);

            if (validateToken(token)) updateUser(userData, token);
        } catch ({ message }) {
            console.log(`Login Error: ${message}`);
        } finally {
            setLoading(false);
        }
    }, []);

    const logout = useCallback(async () => {
        setLoading(true);

        await authApi.logout();

        updateUser(null, null);
        setLoading(false);
    }, []);

    //TODO: implements Promise resolve errors
    const register = useCallback(
        async (data: TypeRegisterData): Promise<TypeRegisterRes> => {
            try {
                await authApi.registerUser(data);

                return Promise.resolve({ success: true });
            } catch (err) {
                console.log(err);
                return Promise.resolve({
                    error: 'have an error',
                    success: false,
                });
            }
        },
        []
    );

    const validateToken = (token: string | null): boolean => {
        if (!token) return false;

        const decodedToken = jwtDecode<TypeToken>(token);
        if (decodedToken.exp * 1000 < Date.now() && decodedToken.email_verified)
            return false;

        return true;
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                logged,
                loading,
                editUser,
                login,
                logout,
                register,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
