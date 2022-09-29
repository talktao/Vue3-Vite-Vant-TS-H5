/** 
 *  @author TalkTao
 * @description  接口封装
*/
import { vuexStore } from "@/store/index";
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

        // 定义存放请求接口数组
        let requestList = [];
        const setLoadingToFalse = response => {
            requestList
                .filter(item => item.url == response.config.url && item.method == response.config.method)
                .forEach(item => (item.isLoading = false));

            //所有请求都加载完才让加载提示消失
            if (requestList.every(item => !item.isLoading)) vuexStore.commit("changeIsLoading", false);
        };

        instance.interceptors.request.use(
            (config: any) => {
                // 不用判断请求loading的路由
                let ignoreLoadingUrls = ["/login"];

                if (!ignoreLoadingUrls.includes(config.url)) {

                    if (requestList.length < 10) {
                        requestList.unshift({ ...config, isLoading: true });
                    } else {
                        requestList = [...requestList.slice(0, 9), { ...config, isLoading: true }];
                    }
                    vuexStore.commit("changeIsLoading", true);
                }
                return config;
            },
            error => Promise.reject(error + '请求错误')
        );

        instance.interceptors.response.use(
            response => {
                setLoadingToFalse(response);
                return response.data;
            },
            error => {
                if (error.response.status == 301) { }
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
