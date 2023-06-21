import { AxiosInstance } from "axios";

export default (http: AxiosInstance) => {
    return {
        getAllArticles(params: any = {}) {
            return http.get(`/articles`, {
                params,
            });
        },
        login(params: any = {}) {
            return http.post(`/users/login`, params);
        },
        getAllTags(params: any = {}) {
            return http.get(`/tags`, {
                params,
            });
        },
    }   
}

