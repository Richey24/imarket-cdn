import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi, UserI } from "../services/auth";
import { getSiteByDomain } from "@/api/site.api";

interface IGlobalState {
     isSideBarVisible: boolean;
     isCartSideBarOpen: boolean;
     site: any
}

interface ISetGlobal {
     isSideBarVisible: boolean;
}

const initialState: IGlobalState = {
     isSideBarVisible: false,
     isCartSideBarOpen: false,
     site: {}
};

const fetchSite = createAsyncThunk(
     'users/fetchByIdStatus',
     async (domain: string, thunkAPI) => {
          const response = await getSiteByDomain(domain)
          return response.data
     }
)


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
     extraReducers: (builder) => {
          builder
               .addCase(fetchSite.fulfilled, (state, action) => {
                    // action is inferred correctly here if using TS
               })
               // You can chain calls, or have separate `builder.addCase()` lines each time
               .addCase(fetchSite.pending, (state, action) => {
                    state.site = action.payload
               })
               .addCase(fetchSite.rejected, (state, action) => { })

     },
});

export const { setSideBarVisibility, setCartSideBarOpen } = globalSlice.actions;
export { fetchSite }
export default globalSlice.reducer;
