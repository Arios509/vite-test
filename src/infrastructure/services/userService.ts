import queryString from 'query-string';

export default function (config: any) {

    const urlAction = {
        normal: '/user/normal',
        user: '/user'
    }

    const { httpClient } = config;

    return {
        async get() {
            return httpClient.get(`${urlAction.normal}/info`)
        },
        async updateFullName(record: any) {
            const qs = queryString.stringify(record)
            return httpClient.put(`${urlAction.user}/full-name?${qs}`)
        },
        async updateWithdrawPassword(record: any) {
            return httpClient.put(`${urlAction.normal}/withdraw-password`, record)
        },
        async updatePassword(record: any) {
            return httpClient.put(`${urlAction.user}/change-password`, record)
        },
        async signIn() {
            return httpClient.post(`${urlAction.normal}/checkin`)
        },
        async updateProfileImage(recordId: any) {
            return httpClient.put(`${urlAction.user}/profile-image/${recordId}`)
        },
        async updateEmail(record: any) {
            const qs = queryString.stringify(record)
            return httpClient.put(`${urlAction.normal}/email?${qs}`)
        },
        async getTeamReport(filterCriteria: any) {
            return httpClient.post(`${urlAction.normal}/team-report2`, filterCriteria)
        },
        async getMyTeam(filterCriteria: any) {
            return httpClient.post(`${urlAction.normal}/my-team`, filterCriteria)
        },
        async getSelfReport() {
            return httpClient.get(`${urlAction.normal}/my-report`)
        },
    }
}