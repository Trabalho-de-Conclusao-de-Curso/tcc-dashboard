import {
    TypeLoginData,
    TypeUser,
    TypeRegisterData,
    TypeLoginRes,
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

    editUser: (data: TypeUser) => api.post(urls.editUser, data),

    changePhoto: (data: FormData) => api.post<string>(urls.changePhoto, data),
};

export default authApi;
