import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { initialState } from "../Types/PublicTypes";

export const fetchCreateNewJop = createAsyncThunk(
  "createNewJop/fetchCreateNewJop",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:3000/createjop", data);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Failed to fetch jobs");
    }
  }
);

const CreateNewJopSlice = createSlice({
  name: "createNewJop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCreateNewJop.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchCreateNewJop.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
      })
      .addCase(fetchCreateNewJop.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "An error occurred";
      });
  },
});

export default CreateNewJopSlice.reducer;
