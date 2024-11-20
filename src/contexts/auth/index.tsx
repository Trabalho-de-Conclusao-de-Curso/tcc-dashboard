import React, { createContext, useState, useEffect, useCallback } from 'react';
import jwtDecode from 'jwt-decode';

import {
    TypeUser,
    TypeLoginData,
    TypeToken,
    TypeRegisterData,
    TypeRegisterRes,
    TypeEditProfile,
} from '../../models/auth';
import { authApi } from '../../services';
import api from '../../services/api';

type AuthContextData = {
    user: TypeUser | null;
    logged: boolean;
    loading: boolean;
    editUser: (data: TypeEditProfile, photo?: File) => Promise<boolean>;
    logout: () => void;
    login: (data: TypeLoginData) => Promise<TypeRegisterRes>;
    register: (data: TypeRegisterData) => Promise<TypeRegisterRes>;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const tokenKey = '@tccapp:token:';

    const [user, setUser] = useState<TypeUser | null>(null);
    const [loading, setLoading] = useState(false);
    const [logged, setLogged] = useState(false);

    const validateToken = (token: string | null): boolean => {
        if (token === 'null') return false;
        if (!token) return false;

        const decodedToken = jwtDecode<TypeToken>(token);
        if (decodedToken.exp * 1000 < Date.now() && decodedToken.email_verified)
            return false;

        return true;
    };

    const updateUser = async (
        newUser: TypeUser | null,
        token?: string | null
    ) => {
        localStorage.setItem(`${tokenKey}userData`, JSON.stringify(newUser));

        if (token !== undefined) {
            localStorage.setItem(
                `${tokenKey}authToken`,
                token === null ? JSON.stringify(token) : token
            );
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }

        setUser(newUser);
    };

    useEffect(() => {
        const loadStoragedData = async () => {
            setLoading(true);

            const token = localStorage.getItem(`${tokenKey}authToken`);
            if (validateToken(token)) {
                api.defaults.headers.common[
                    'Authorization'
                ] = `Bearer ${token}`;

                const userData = localStorage.getItem(`${tokenKey}userData`);
                setUser(userData ? JSON.parse(userData) : null);
            } else updateUser(null, null);

            setLoading(false);
        };

        loadStoragedData();
    }, []);

    useEffect(() => {
        setLogged(user !== null);
    }, [user]);

    const editUser = useCallback(
        async (
            newUser: TypeEditProfile,
            photo: File | undefined
        ): Promise<boolean> => {
            try {
                const auxData = newUser;

                if (photo) {
                    const formData = new FormData();
                    formData.append('image', photo, photo.name);
                    const { data } = await authApi.changePhoto(formData);
                    auxData.logo = data;
                }

                await authApi.editUser(user!.id, auxData);

                updateUser({
                    ...user!,
                    ...auxData,
                    logo: photo ? URL.createObjectURL(photo) : user!.logo,
                });

                return Promise.resolve(true);
            } catch (err:any) {
                console.log(err);
                return Promise.resolve(false);
            }
        },
        [user]
    );

    const login = useCallback(
        async (data: TypeLoginData): Promise<TypeRegisterRes> => {
            try {
                const {
                    data: { token, userData },
                } = await authApi.login(data);

                if (validateToken(token)) {
                    updateUser(userData, token);
                    return Promise.resolve({ success: true });
                }

                return Promise.resolve({ success: false, error: 4 });
            } catch (err:any) {
                console.log(err);
                const { code } = err.response.data;
                return Promise.resolve({ success: false, error: code });
            }
        },
        []
    );

    const logout = useCallback(async () => {
        setLoading(true);

        await authApi.logout();

        updateUser(null, null);
        setLoading(false);
    }, []);

    // TODO: implements Promise resolve errors
    const register = useCallback(
        async (data: TypeRegisterData): Promise<TypeRegisterRes> => {
            try {
                await authApi.registerUser(data);

                return Promise.resolve({ success: true });
            } catch (err: any) {
                const { code } = err.response.data;
                return Promise.resolve({
                    error: code,
                    success: false,
                });
            }
        },
        []
    );

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
