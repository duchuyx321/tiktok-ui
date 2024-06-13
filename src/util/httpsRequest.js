import axios from 'axios';

const httpsRequest = axios.create({
    baseURL: `https://tiktok.fullstack.edu.vn/api/`,
});

httpsRequest.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(new Error(error.message));
    },
);

export const get = async (path, options = {}) => {
    const response = await httpsRequest.get(path, options);
    return response.data;
};
export const post = async (path, options = {}) => {
    const response = await httpsRequest.post(path, options);
    return response.data;
};

export default httpsRequest;
