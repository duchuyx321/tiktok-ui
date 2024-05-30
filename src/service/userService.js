import * as request from '~/util/httpsRequest';

export const setSuggested = async (page = 1, parPage = 5) => {
    try {
        const res = await request.get('users/suggested', {
            params: {
                page,
                par_page: parPage,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
