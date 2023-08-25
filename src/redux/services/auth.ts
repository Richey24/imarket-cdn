import { api } from "./api";

export interface UserI {
     _id: string;
     firstname: string;
     lastname: string;
     email: string;
     password: string;
     onboarded: boolean;
     subscribed: boolean;
     company: string;
     role: string;
     created_at?: string;
}
export interface UserResponse {
     user: UserI;
     token: string;
     message?: string;
}

export interface LoginRequest {
     email: string;
     password: string;
}

export interface RegisterRequest {
     email: string;
     firstname: string;
     lastname: string;
     password: string;
     confirmPassword: string;
}

interface RegisterPayload {
     email: string;
     firstname: string;
     lastname: string;
     password: string;
     domain: string;
}

interface ResendVerificationPayload {
     email: string;
}

interface SendPasswordVerificationPayload {
     email: string;
}

export const authApi = api.injectEndpoints({
     endpoints: (build) => ({
          login: build.mutation<UserResponse, LoginRequest>({
               query: (credentials: any) => ({
                    url: "/auth/signin/email", // "/auth/login",
                    method: "POST",
                    body: credentials,
               }),
          }),
          register: build.mutation<any, RegisterPayload>({
               query: (credentials: any) => ({
                    url: "/auth/register",
                    method: "POST",
                    body: credentials,
               }),
          }),
          resendVerification: build.mutation<any, ResendVerificationPayload>({
               query: (credentials: any) => ({
                    url: "/verification/resend-email",
                    method: "POST",
                    body: credentials,
               }),
          }),
          sendPasswordVerification: build.mutation<any, SendPasswordVerificationPayload>({
               query: (credentials: any) => ({
                    url: "/send-password-email",
                    method: "POST",
                    body: credentials,
               }),
          }),
     }),
});

export const {
     useLoginMutation,
     useRegisterMutation,
     useResendVerificationMutation,
     useSendPasswordVerificationMutation,
} = authApi;

export const {
     endpoints: { login },
} = authApi;
