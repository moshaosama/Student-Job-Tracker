import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { initialState } from "../Types/PublicTypes";

export const fetchAllJops = createAsyncThunk(
  "allJops/fetchAllJops",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:3000/getjops");
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Failed to fetch jobs");
    }
  }
);

const GetALlJopsSlice = createSlice({
  name: "allJops",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllJops.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchAllJops.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
      })
      .addCase(fetchAllJops.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "An error occurred";
      });
  },
});

export default GetALlJopsSlice.reducer;
