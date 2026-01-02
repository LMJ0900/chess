import axios from 'axios';

import { getClientAccessToken, getServerAccessToken } from '@/api/ApiClient.util';
import { ApiResponse } from '@/api/support/response/ApiResponse';

import { BASE_URL } from '@/constant/environment';

const baseApiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

baseApiClient.interceptors.request.use(async (request) => {
  const accessToken = typeof window === 'undefined' ? await getServerAccessToken() : getClientAccessToken();

  if (accessToken) request.headers['Authorization'] = `Bearer ${accessToken}`;

  return request;
});

interface ApiClientProps {
  apiType: 'MOCK';
  urlPath: string;
  method: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';
  data?: any;
  cache?: 'no-store';
}

const apiClient = async <SuccessData = null, ErrorData = null>(props: ApiClientProps) => {
  const options = {
    url: props.urlPath,
    method: props.method,
    ...(props.data && { data: props.data }),
  };

  try {
    const response = await baseApiClient(options);
    const successResponseData: ApiResponse<SuccessData, ErrorData> = response.data;

    return ApiResponse.result(successResponseData);
  } catch (error: any) {
    const errorResponseData: ApiResponse<SuccessData, ErrorData> = error.response.data;

    return Promise.reject(ApiResponse.result(errorResponseData));
  }
};

export default apiClient;
