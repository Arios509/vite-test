import queryString from 'query-string';

export default function (config: any) {

    const urlAction = {
        noAuth: '/mine/normal-nl',
        mining: '/mine/normal',
        exchange: '/mine'
    }

    const { httpClient, noAuthHttpClient } = config;

    return {
        getAllPackage: async (recordId: any) => httpClient.get(`${urlAction.mining}/package/list/${recordId}`),
        getAll: async () => noAuthHttpClient.get(`${urlAction.noAuth}/product/list`),
        getProduct: async (recordId: any) => noAuthHttpClient.get(`${urlAction.noAuth}/product/${recordId}`),
        getAllBookingRunning: async (filterCriteria: any) => {
            const qs = queryString.stringify(filterCriteria);
            return httpClient.get(`${urlAction.mining}/booking/list/running?${qs}`)
        },
        getAllBookingHistory: async (filterCriteria: any) => {
            const qs = queryString.stringify(filterCriteria);
            return httpClient.get(`${urlAction.mining}/booking/list/history?${qs}`)
        },
        getPackage: async (recordId: any, filterCriteria: any) => {
            const qs = queryString.stringify(filterCriteria);
            return httpClient.get(`${urlAction.mining}/package/purchase-info/${recordId}?${qs}`)
        },
        add: async (record: any) => httpClient.post(`${urlAction.mining}/booking`, record),
        getAllExchange: async () => httpClient.get(`${urlAction.exchange}/wallet/list`),
        getExchange: async (recordId: any) => httpClient.get(`${urlAction.exchange}/exchange/info/${recordId}`),
        addExchange: async (record: any) => httpClient.post(`${urlAction.exchange}/exchange`, record),
        getAllExchangeHistory: async (recordId: any, record: any) => httpClient.post(`${urlAction.exchange}/exchange/history2/${recordId}`, record),
        addOnBehalf: async (record: any) => httpClient.post(`${urlAction.mining}/booking/purchase-on-behalf`, record),
        getAllPackagePurchaseOnBehalf: async (filterCriteria: any) => {
            const qs = queryString.stringify(filterCriteria);
            return httpClient.get(`${urlAction.mining}/package/purchase-on-behalf/info?${qs}`)
        },
        getProductNoAuth: async () => noAuthHttpClient.get(`${urlAction.noAuth}/product/list`),
        getPackageNoAuth: async (recordId: any) => noAuthHttpClient.get(`${urlAction.noAuth}/package/list/${recordId}`),
        getMiningProfitCalculate: async (filterCriteria: any) => {
            const qs = queryString.stringify(filterCriteria);
            return noAuthHttpClient.post(`${urlAction.noAuth}/calculate-profit2?${qs}`)
        },
        getAllMiningPrice: async (filterCriteria: any) => {
            const qs = queryString.stringify(filterCriteria);
            return noAuthHttpClient.get(`${urlAction.noAuth}/cryto-price?${qs}`)
        }
    }
}