import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const countryData = createAsyncThunk(
    "country/fetch",
    async (_,thunkAPI) => {
        const url = "https://restcountries.com/v3.1/all";
        try{
            const res=await axios.get(url);
            const data=res.data.filter(country=>country.name.common.toLowerCase() !=="israel");
            const countries= data.filter(country=>country.flag !== "🇪🇭");
            return countries ;

        }catch{
            return thunkAPI.rejectWithValue({error:"Error fetching data"});
        }
    }
)