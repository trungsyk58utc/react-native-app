import axiosCustom from './axiosBase';

export const authenAPI = {
  login(data: any): Promise<any> {
    const url = '/auth/login';
    return axiosCustom.post(url, data);
  },
};
