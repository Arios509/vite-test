export default function (config: any) {

    const urlAction = {
        announcement: '/announcement/normal-nl'
    }

    const { noAuthHttpClient } = config;

    return {
        async getAll(languageId: number) {
            return noAuthHttpClient.get(`${urlAction.announcement}/list/${languageId}`)
        },
    }
}