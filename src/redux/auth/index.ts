import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi, UserI } from "../services/auth";

interface AuthState {
     isAuthenticated: boolean;
     user: UserI | null;
     isLoading: boolean;
}

interface ISetAuth {
     user: UserI;
     isAuthenticated: boolean;
     isLoading: boolean;
}

const initialState: AuthState = {
     isAuthenticated: false,
     user: {
          _id: "",
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          onboarded: false,
          subscribed: false,
          role: "",
          company: "",
          created_at: "",
     },
     isLoading: false,
};

export const authSlice = createSlice({
     name: "auth",
     initialState,
     reducers: {
          setAuth: (state, action: PayloadAction<ISetAuth>) => {
               state.user = action.payload.user;
               state.isAuthenticated = action.payload.isAuthenticated;
               state.isLoading = action.payload.isLoading;
          },
          removeAuth: (state) => {
               state.user = initialState.user;
               state.isAuthenticated = initialState.isAuthenticated;
               state.isLoading = initialState.isLoading;
          },
     },
     extraReducers: (builder) => {
          builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
               state.user = action.payload.user;
               state.isAuthenticated = true;

               // stored in localStorage
               localStorage.setItem("access_token", action.payload.access_token);
               localStorage.setItem("refresh_token", action.payload.refresh_token);
          });
     },
});

export const { setAuth } = authSlice.actions;
export const { removeAuth } = authSlice.actions;

export default authSlice.reducer;
