import axios from 'axios';

const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aWt0b2suZnVsbHN0YWNrLmVkdS52blwvYXBpXC9hdXRoXC9yZWdpc3RlciIsImlhdCI6MTcxNzEzMDI4NSwiZXhwIjoxNzE5NzIyMjg1LCJuYmYiOjE3MTcxMzAyODUsImp0aSI6IkU1ejlOeUFjbGNLTVMzaWgiLCJzdWIiOjY3NTMsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.ekFSCV5HI9SyLt2pv6_gxM6xKDmjfOQT2a8B9VgAP_Y';

const httpsRequest = axios.create({
    baseURL: `https://tiktok.fullstack.edu.vn/api/`,
    headers: { Authorization: `Bearer ${token}` },
});

export const get = async (path, options = {}) => {
    const response = await httpsRequest.get(path, options);
    return response.data;
};

export default httpsRequest;
