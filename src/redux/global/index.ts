import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi, UserI } from "../services/auth";

interface IGlobalState {
     isSideBarVisible: boolean;

}

interface ISetGlobal {
     isSideBarVisible: boolean;
}

const initialState: IGlobalState = {
     isSideBarVisible: false,
};

export const globalSlice = createSlice({
     name: "global",
     initialState,
     reducers: {
          setSideBarVisibility: (state) => {
               state.isSideBarVisible = !state.isSideBarVisible
          },

     },
     extraReducers: (builder) => {

     },
});

export const { setSideBarVisibility } = globalSlice.actions;

export default globalSlice.reducer;
