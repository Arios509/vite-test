export default function (config: any) {

    const urlAction = {
        moneyLog: '/money-logs/normal',
    }

    const { httpClient } = config;

    return {
        async getAll(filter: any) {
            return httpClient.post(`${urlAction.moneyLog}/list/`, filter)
        },
    }
}