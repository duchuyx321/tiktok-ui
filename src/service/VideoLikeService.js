import * as request from '~/util/httpsRequest';

export const VideoLikes = async (nickName = '@duchuyx321') => {
    try {
        const res = await request.get(`users/${nickName}`);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
