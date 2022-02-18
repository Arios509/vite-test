import queryString from 'query-string';

export default function (config: any) {

    const urlAction = {
        user: '/user/normal-nl',
        auth: '/auth'
    }

    const { httpClient, noAuthHttpClient } = config;

    return {
        async login(record: any) {
            return noAuthHttpClient.post(`${urlAction.auth}/normal`, record)
        },
        async register(record: any) {
            return noAuthHttpClient.post(`${urlAction.user}/register`, record)
        },
        async logout(record: any) {
            return httpClient.post(`${urlAction.auth}/logout`, record)
        },
        async resetPassword(record: any) {
            const qs = queryString.stringify(record);
            return noAuthHttpClient.post(`${urlAction.user}/forgot-password?${qs}`)
        },
        getVerificationCode: async (record: any) => {
            const qs = queryString.stringify(record);
            return noAuthHttpClient.get(`${urlAction.user}/get-verification-code?${qs}`)
        }
    }
}