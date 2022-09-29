import { apiUrl } from '@/const/api';
import axiosInstance, { AxiosResponseProps } from '@/uitls/request';

export const getTest = (params?: any) => {
	return axiosInstance.get(apiUrl.TEST_PROXY, { params: params || {} });
};
