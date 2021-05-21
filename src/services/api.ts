import axios from 'axios';

//TODO: add baseUrl
const api = axios.create({
    baseURL: 'https://us-central1-socialep-3bdd5.cloudfunctions.net/api/',
});

export default api;
