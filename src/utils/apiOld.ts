import axios, {
     AxiosError,
     AxiosInstance,
     AxiosRequestConfig,
     InternalAxiosRequestConfig,
} from "axios";

interface RefreshToken {
     status: number;
     data: {
          hashToken: string;
     };
}

export abstract class HTTPBaseService {
     protected instance: AxiosInstance;
     protected token: string;
     protected readonly baseURL: string;

     public constructor(
          token?: string,
          baseURL: string = process.env.NEXT_PUBLIC_BACKEND_URL as string,
     ) {
          this.baseURL = baseURL;
          this.instance = axios.create({
               baseURL,
          });
          this.token = token || "";

          this.initializeRequestInterceptor();
          this.initializeResponseInterceptor();
     }

     private initializeRequestInterceptor = () => {
          this.instance.interceptors.request.use(this.handleRequest);
     };

     private initializeResponseInterceptor = () => {
          this.instance.interceptors.response.use((response) => {
               if (response.headers && response.headers.authorization) {
                    const responseToken = (response.headers.authorization as string).split(" ")[1];
                    this.token = responseToken;

                    localStorage.setItem("hashToken", this.token);
               }
               return response;
          }, this.handleError);
     };

     private handleRequest = (config: InternalAxiosRequestConfig) => {
          config.headers["Authorization"] = `Bearer ${this.token}`;
          return config;
     };

     private handleError = async (error: AxiosError) => {
          const originalRequest = error.config;
          if (error.response?.status === 401) {
               const refreshToken = await this.refreshToken();
               if (refreshToken.status === 200 && originalRequest) {
                    this.token = refreshToken.data.hashToken;
                    localStorage.setItem("hashToken", this.token);
                    return this.instance(originalRequest);
               }
          }
     };

     private async refreshToken(): Promise<RefreshToken> {
          const refreshTokenRequest = {
               hashToken: this.token,
          };

          const { data } = await this.addRequestOptionsForClientSecrect();
          const options: AxiosRequestConfig = {
               headers: {
                    CLIENT_KEY: data.clientKey,
               },
          };

          return axios.post(`${this.baseURL}/User/RenewToken`, refreshTokenRequest, options);
     }

     private addRequestOptionsForClientSecrect() {
          return axios.get(`${this.baseURL}/Utility/GetSecrets`);
     }
}
