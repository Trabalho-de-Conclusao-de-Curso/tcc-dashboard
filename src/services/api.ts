import axios from 'axios';

// http://localhost:5000/socialep-3bdd5/us-central1/api/
// https://us-central1-socialep-3bdd5.cloudfunctions.net/api/
const api = axios.create({
    baseURL: 'https://us-central1-socialep-3bdd5.cloudfunctions.net/api/',
});

export default api;
