import { TypeRegistration, TypeUser, TypeSelectUserData } from '../models/opp';
import api from './api';

const baseUrl = 'registrations/';

const urls = {
    getRegistrations: `${baseUrl}`,
    getUser: `${baseUrl}user/`,
    selectUser: `${baseUrl}user/select`,
};

type TypeGetRes = {
    registrations: TypeRegistration[];
};

const registrationsApi = {
    getRegistrations: (oppId: string) =>
        api.get<TypeGetRes>(`${urls.getRegistrations}${oppId}`),

    getUser: (userId: string) => api.get<TypeUser>(`${urls.getUser}${userId}`),

    selectUser: (data: TypeSelectUserData) => api.post(urls.selectUser, data),
};

export default registrationsApi;
