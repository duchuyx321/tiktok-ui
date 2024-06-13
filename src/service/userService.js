import * as request from '~/util/httpsRequest';

export const user = async () => {
    try {
        const res = await request.get('auth/me');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
