/** 
 *  @author TalkTao
 * @description  接口封装
*/ 
import store from "@/store/index";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, Method } from "axios";
export interface AxiosResponseProps {
    code?: number;
    status?: number;
    data?: any;
    datas?: any;
    msg?: string | null;
}
class HttpRequest {
    private readonly baseURL: string;
    private readonly withCredentials: boolean;
    private readonly timeout: number;
    constructor() {
        //获取当前环境的api地址
        this.baseURL = import.meta.env.VITE_BASE_URL as string;
        this.withCredentials = true;
        this.timeout = 1000 * 60;
    }
    //初始化get请求
    getInitConfig(): AxiosRequestConfig {
        return {
            baseURL: this.baseURL,
            withCredentials: this.withCredentials,
            timeout: this.timeout,
        };
    }
    interceptors(instance: AxiosInstance) {
        let requestList = [];
        const setLoadingToFalse = response => {
            requestList
                .filter(item => item.url == response.config.url && item.method == response.config.method)
                .forEach(item => (item.isLoading = false));
            //所有请求都加载完才让加载提示消失
            if (requestList.every(item => !item.isLoading)) store.commit("changeIsLoading", false);
        };
        instance.interceptors.response.use(
            response => {
                setLoadingToFalse(response);
                return response.data;
            },
            error => {
                if (error.response.status == 301) {
                    store.commit("changeLoginModalVisible", true);
                }
                setLoadingToFalse(error);
                return Promise.reject(error.response?.data);
            }
        );
    }
    request(): AxiosInstance {
        const instance = axios.create(this.getInitConfig());
        this.interceptors(instance);
        return instance;
    }
}
const http = new HttpRequest();
export default http.request();
