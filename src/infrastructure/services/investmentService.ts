import queryString from 'query-string';

export default function (config: any) {

    const urlAction = {
        normal: '/investment/normal-nl/project',
    }

    const { httpClient, noAuthHttpClient } = config;

    return {
        async getAll() {
            return noAuthHttpClient.get(`${urlAction.normal}/list`)
        },
        async get(recordId: any) {
            return noAuthHttpClient.get(`${urlAction.normal}/${recordId}`)
        },
        async save(record: any) {
            return httpClient.post(`/investment/normal/booking`, record)
        },
        async getBookingAll(filterCriteria: any) {
            const qs = queryString.stringify(filterCriteria)
            return httpClient.get(`/investment/normal/booking/list?${qs}`)
        },
        async getBookingDetail(recordId: any) {
            return httpClient.get(`/investment/normal/booking/${recordId}`)
        },
        async deleteBookingDetail(recordId: any) {
            return httpClient.delete(`/investment/normal/booking/${recordId}`)
        },
        async getProfit(filterCriteria: any) {
            const qs = queryString.stringify(filterCriteria)
            return noAuthHttpClient.post(`/investment/normal-nl/calculate-profit?${qs}`)
        },
    }
}