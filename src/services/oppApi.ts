import { TypeAddOpp, TypeOpp } from '../models/opp';
import api from './api';

const baseUrl = 'opportunity/';

const urls = {
    getOpps: 'opportunities/get',
    addOpp: `${baseUrl}add`,
    removeOpp: `${baseUrl}remove/`,
    openOpp: `${baseUrl}open/`,
    closeOpp: `${baseUrl}close/`,
    editOpp: `${baseUrl}edit/`,
    uploadImages: `${baseUrl}photos/`,
};

const oppApi = {
    getOpps: () => api.get<TypeOpp[]>(urls.getOpps),

    addOpp: (data: TypeAddOpp) => api.post<string>(urls.addOpp, data),

    removeOpp: (oppId: string) => api.post(`${urls.removeOpp}${oppId}`),

    openOpp: (oppId: string) => api.post(`${urls.openOpp}${oppId}`),

    closeOpp: (oppId: string) => api.post(`${urls.closeOpp}${oppId}`),

    editOpp: (oppId: string, data: TypeOpp) =>
        api.post(`${urls.editOpp}${oppId}`, data),

    uploadImages: (oppId: string, data: FormData) =>
        api.post(`${urls.uploadImages}${oppId}`, data),
};

export default oppApi;
