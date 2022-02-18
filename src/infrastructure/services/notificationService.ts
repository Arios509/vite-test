import queryString from 'query-string';

export default function (config: any) {

    const urlAction = {
        normal: '/notification',
    }

    const { httpClient, noAuthHttpClient } = config;

    return {
        getAll: async (recordId: any, filterCriteria: any) =>
            httpClient.post(`${urlAction.normal}/list/${recordId}`, filterCriteria),
        delete: async (recordId: any) =>
            httpClient.delete(`${urlAction.normal}/${recordId}`),
        getTotalUnread: async (recordId: any) =>
            httpClient.get(`${urlAction.normal}/total-unread`),
    }
}