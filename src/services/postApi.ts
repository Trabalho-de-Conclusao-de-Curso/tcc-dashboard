import { TypePost, TypePostReq } from '../models/post';
import api from './api';

const defaultUrl = 'posts/';

const urls = {
    getPosts: defaultUrl + 'get',
    addPost: defaultUrl + 'add',
    removePost: defaultUrl + 'remove/',
    uploadPostImg: defaultUrl + 'uploadImage/',
};

const postApi = {
    getPosts: () => api.get<TypePost[]>(urls.getPosts),

    addPost: (data: TypePostReq) => api.post<string>(urls.addPost, data),

    removePost: (postId: string) => api.post(urls.removePost + postId),

    uploadPostImg: (postId: string, data: FormData) =>
        api.post(urls.uploadPostImg + postId, data),
};

export default postApi;
