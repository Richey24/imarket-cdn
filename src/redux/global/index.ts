import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi, UserI } from "../services/auth";

interface IGlobalState {
     isSideBarVisible: boolean;
     isCartSideBarOpen: boolean;
}

interface ISetGlobal {
     isSideBarVisible: boolean;
}

const initialState: IGlobalState = {
     isSideBarVisible: false,
     isCartSideBarOpen: false,
};

export const globalSlice = createSlice({
     name: "global",
     initialState,
     reducers: {
          setSideBarVisibility: (state) => {
               state.isSideBarVisible = !state.isSideBarVisible;
          },
          setCartSideBarOpen: (state) => {
               state.isCartSideBarOpen = !state.isCartSideBarOpen;
          },
     },
     extraReducers: (builder) => {},
});

export const { setSideBarVisibility, setCartSideBarOpen } = globalSlice.actions;

export default globalSlice.reducer;
