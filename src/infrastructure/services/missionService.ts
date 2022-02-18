export default function (config: any) {

    const urlAction = {
        normal: '/mission/normal',
    }

    const { httpClient } = config;

    return {
        async getAll() {
            return httpClient.get(`${urlAction.normal}`)
        },
        async update(recordId: any) {
            return httpClient.post(`${urlAction.normal}/do/${recordId}`)
        },
    }
}