import * as request from '~/util/httpsRequest';

export const login = async (email, password) => {
    try {
        const res = await request.post('auth/login', { email, password });
        return res;
    } catch (error) {
        return error;
    }
};

export const register = async (email, password, type = 'email') => {
    try {
        const res = await request.post('auth/register', {
            type,
            email,
            password,
        });
        console.log(res);
        return res;
    } catch (error) {
        return error;
    }
};
