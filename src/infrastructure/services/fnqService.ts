export default function (config: any) {

    const urlAction = {
        noAuth: '/fnq/normal-nl',
    }

    const { httpClient, noAuthHttpClient } = config;

    return {
        async getAll() {
            return noAuthHttpClient.get(`${urlAction.noAuth}/list`)
        },
        async get(recordId: any) {
            return noAuthHttpClient.get(`${urlAction.noAuth}/${recordId}`)
        },
    }
}