import * as request from '~/util/httpsRequest';

export const setSuggested = async (page = 1) => {
    try {
        const res = await request.get('me/followings', {
            params: {
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
