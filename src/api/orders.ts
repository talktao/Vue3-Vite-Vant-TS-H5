import axiosInstance, { AxiosResponseProps } from '@/uitls/request'

export const getList = (params: any) => {
	return axiosInstance.get("/common/code/logisticsInfo/getLogisticsByOrderId", { params: params || {} });
}
