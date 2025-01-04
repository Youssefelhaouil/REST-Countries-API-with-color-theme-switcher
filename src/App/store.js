import { configureStore } from "@reduxjs/toolkit";
import { countrySlice } from "./Slices/coutrySlices";

export const store=configureStore({
    reducer:{
        country:countrySlice.reducer,
    }
})