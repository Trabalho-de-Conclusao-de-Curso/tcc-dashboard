import {
    TypeLoginData,
    TypeRegisterData,
    TypeLoginRes,
    TypeEditProfile,
} from '../models/auth';
import api from './api';

const defaultUrl = 'organization/';

const urls = {
    registerUser: 'signUp',
    editUser: `${defaultUrl}edit`,
    changePhoto: `${defaultUrl}logo`,
    login: 'signIn',
    logout: 'signOut',
};

const authApi = {
    registerUser: (data: TypeRegisterData) => api.post(urls.registerUser, data),

    login: (data: TypeLoginData) => api.post<TypeLoginRes>(urls.login, data),

    logout: () => api.post(urls.logout),

    editUser: (userId: string, data: TypeEditProfile) =>
        api.post(`${urls.editUser}/${userId}`, data),

    changePhoto: (data: FormData) => api.post<string>(urls.changePhoto, data),
};

export default authApi;
