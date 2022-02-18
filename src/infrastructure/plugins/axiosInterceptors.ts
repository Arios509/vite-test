import { jwtDecrypt } from "seedwork/jwtVerify"

const axiosInterceptors = {
    decorate: function (axios: any) {
        axios.interceptors
            .response
            .use((response: any) => [null, response.data],
                (error: any) => {
                    const decryptedJwt = jwtDecrypt(localStorage.getItem('token') || '')
                    if (error.response.status === 401 || !decryptedJwt) {
                        localStorage.clear()
                        window.location.href = '/#/login'
                    }
                    return [error.response.data]
                })
    }
}
export default axiosInterceptors;
