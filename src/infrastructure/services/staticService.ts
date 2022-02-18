export default function (config: any) {

    const urlAction = {
        static: '/static/normal-nl',
    }

    const { noAuthHttpClient } = config;

    return {
        async getAboutUs(record: any) {
            return noAuthHttpClient.get(`${urlAction.static}/about-us`, record)
        },
        async getHtmlContent(type: any) {
            return noAuthHttpClient.get(`${urlAction.static}/html-content/${type}`)
        },
    }
}