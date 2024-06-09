import * as request from '~/util/httpsRequest';

export const videos = async (type = 'for-you', page = '43') => {
    try {
        const res = await request.get('videos', {
            params: {
                type,
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
