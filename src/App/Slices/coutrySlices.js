import { createSlice } from "@reduxjs/toolkit";
import { countryData } from "../Data/CountryData";

const initialState = {
  country: [],
  loading: false,
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(countryData.pending, (state) => {
        state.loading = true;
      })
      .addCase(countryData.fulfilled, (state, action) => {
        state.country = action.payload;
        state.loading = false;
      })
      .addCase(countryData.rejected, (state) => {
        state.loading = false;
      });
  },
});


