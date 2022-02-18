export default function (config: any) {

    const urlAction = {
        bank: '/bank/normal',
    }

    const { httpClient } = config;

    return {
        async getDepositBankList() {
            return httpClient.get(`${urlAction.bank}/collectmoneybank/v2/list`)
        },
        async getWithdrawalBankList() {
            return httpClient.get(`${urlAction.bank}/userbank/v2/list`)
        },
        async getWithdrawalBankFiats(recordId: any) {
            return httpClient.get(`${urlAction.bank}/userbank/v2/fiat/${recordId}/list`)
        },
        async getUserWithdrawalBankList() {
            return httpClient.get(`${urlAction.bank}/userbindbank/list`)
        },
        async addUserWithdrawalBank(record: any) {
            return httpClient.post(`${urlAction.bank}/userbindbank`, record)
        },
        async deleteUserWithdrawalBank(recordId: any) {
            return httpClient.delete(`/bank/userbindbank/${recordId}`)
        },
        async getDepositBankFiats(recordId: any) {
            return httpClient.get(`${urlAction.bank}/collectmoneybank/v2/fiat/${recordId}/list`)
        },
    }
}