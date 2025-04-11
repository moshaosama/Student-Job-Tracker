import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { initialState } from "../Types/PublicTypes";

export const fetchFilterJops = createAsyncThunk(
  "FilterJop/fetchFilterJops",
  async (status: string = "All", thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/filterjop/${status}`
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Failed to fetch jobs");
    }
  }
);

const GetFilterJopsSlice = createSlice({
  name: "FilterJop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilterJops.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchFilterJops.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
      })
      .addCase(fetchFilterJops.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "An error occurred";
      });
  },
});

export default GetFilterJopsSlice.reducer;
