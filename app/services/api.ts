import axios from 'axios';
import repository from './repository';

const baseUrlApi = process.env.NEXT_PUBLIC_BASE_API_URL;
const access_token = '';

const api = axios.create({
    baseURL: baseUrlApi,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    }
});

api.interceptors.request.use(function (config) {
    const accessToken :string = String(access_token);
    if (accessToken) {
        config.headers['Authorization'] = accessToken;
    }
    return config;
});
api.interceptors.response.use(
    (response): any => {
        return {
            success: true,
            data: response.data,
            status: response.status,
        };
    },
    (error): any => {
        return {
            success: false,
            data: null,
            status: error.status,
        };            
    }
);


const mainRepository = repository(api);

export default mainRepository;