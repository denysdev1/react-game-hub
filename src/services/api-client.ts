import axios, { AxiosRequestConfig } from 'axios';

export type FetchResponse<T> = {
  count: number;
  results: T[];
};

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

class APIClient<T> {
  constructor(public endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance  
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  }
}

export default APIClient;
