export default function (config: any) {

    const urlAction = {
        slideshow: '/settings/normal-nl/slideshow',
    }

    const { noAuthHttpClient } = config;

    return {
        async getAll(recordId: number) {
            return noAuthHttpClient.get(`${urlAction.slideshow}/list2/${recordId}`)
        },
        getAllHighlight: async (recordId: number) =>
            noAuthHttpClient.get(`${urlAction.slideshow}/list/${recordId}`),
        get: async (recordId: number) =>
            noAuthHttpClient.get(`${urlAction.slideshow}/${recordId}`)
    }
}