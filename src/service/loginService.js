import * as request from '~/util/httpsRequest';

export const login = async (email, password) => {
    try {
        const res = await request.post('auth/login', { email, password });
        return res;
    } catch (error) {
        return error;
    }
};
