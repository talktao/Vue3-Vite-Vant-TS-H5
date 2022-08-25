import axiosInstance, { AxiosResponseProps } from '@/uitls/request';

export const getList = (params?: any) => {
	return axiosInstance.get("http://yapi.smart-xwork.cn/mock/60279/bear/tabs", { params: params || {} });
};
