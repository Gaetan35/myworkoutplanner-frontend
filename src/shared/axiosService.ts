import axios, { AxiosInstance, AxiosResponse } from "axios";

class AxiosService {
  protected readonly instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({ baseURL });

    this.instance.interceptors.response.use(
      (response: AxiosResponse<string | undefined>) => ({
        ...response,
        response: response.data,
      }),
      (error) => Promise.reject(error)
    );
  }

  async get<T>(path: string) {
    try {
      return await this.instance.get<T>(path);
    } catch (error) {
      return AxiosService.manageErrors(error);
    }
  }

  static manageErrors(error: unknown) {
    console.error(error);

    return Promise.reject(error);
  }
}

export default AxiosService;
