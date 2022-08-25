import axiosInstance, { AxiosResponseProps } from '@/uitls/request';

export const getList = (params?: any) => {
	return axiosInstance.get("https://www.fastmock.site/mock/826b7b3ffc420fe885bdce88c8e6cdb7/test/api/list", { params: params || {} });
};
