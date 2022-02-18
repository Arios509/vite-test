import queryString from 'query-string';

export default function (config: any) {

    const urlAction = {
        normal: '/deposit-n-withdraw/normal',
        noAuth: '/deposit-n-withdraw/normal-nl',
    }

    const { httpClient } = config;

    return {
        async getAll(filter: any) {
            return httpClient.get(`${urlAction.normal}/deposit-withdraw/list`, filter)
        },
        async addDeposit(formData: any, record: any) {
            const qs = queryString.stringify(record)
            return httpClient.post(`${urlAction.normal}/deposit?${qs}`, formData)
        },
        async addWithdraw(record: any) {
            return httpClient.post(`${urlAction.normal}/withdraw`, record)
        },
        async readQr(formData: any) {
            return httpClient.post(`${urlAction.noAuth}/extract-qrcode-content`, formData)
        },
    }
}