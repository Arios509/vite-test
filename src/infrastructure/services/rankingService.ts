export default function (config: any) {

    const urlAction = {
        normal: '/ranking/normal-nl',
        auth: '/ranking/normal',
    }

    const { noAuthHttpClient, httpClient } = config;

    return {
        async getMerchant() {
            return httpClient.post(`${urlAction.auth}/merchant/list`)
        },
        async getUser() {
            return httpClient.post(`${urlAction.auth}/user/list`)
        },
    }
}