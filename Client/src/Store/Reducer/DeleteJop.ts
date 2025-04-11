import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { initialState } from "../Types/PublicTypes";

export const fetchDeleteJop = createAsyncThunk(
  "DeleteJop/fetchDeleteJop",
  async (id: string, thunkAPI) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/deletejop/${id}`
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Failed to Delete job");
    }
  }
);

const DeleteJopSlice = createSlice({
  name: "DeleteJop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeleteJop.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchDeleteJop.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
      })
      .addCase(fetchDeleteJop.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "An error occurred";
      });
  },
});

export default DeleteJopSlice.reducer;
