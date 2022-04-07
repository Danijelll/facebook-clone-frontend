import router from "@/router";
import { BASE_URL } from "@/urlconstants";
import axios from "axios";

class AuthService {
    async login(user: any) {
        return axios.post(BASE_URL + '/login', user)
            .then(function (response) {
                localStorage.setItem('token', response.data)
                const status = JSON.parse((response.status).toString());

                if (status == '200') {
                    router.push('/ok');
                }
            }).catch(function (error) {
                console.log(error);
            });
    }
    async register(user: any) {
        return axios.post(BASE_URL + '/register', user)
            .then(function (response) {
                const status = JSON.parse((response.status).toString());

                if (status == '200') {
                    router.push('/ok');
                }
            }).catch(function (error) {
                console.log(error);
            });
    }
}

export default new AuthService();
