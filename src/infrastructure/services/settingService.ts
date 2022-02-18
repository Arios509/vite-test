export default function (config: any) {

    const urlAction = {
        settings: '/settings/normal-nl',
    }

    const { noAuthHttpClient } = config;

    return {
        async getGeneral() {
            return noAuthHttpClient.get(`${urlAction.settings}/general/list`)
        },
    }
}