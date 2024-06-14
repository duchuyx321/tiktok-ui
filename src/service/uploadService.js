import * as request from '~/util/httpsRequest';

export const create = async (
    description,
    upload_file,
    thumbnail_time = '1',
) => {
    try {
        const res = await request.post('videos', {
            description,
            upload_file,
            thumbnail_time,
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
