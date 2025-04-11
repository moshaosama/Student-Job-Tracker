import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { initialState } from "../Types/PublicTypes";

interface UpdatedData {
  company?: string;
  role?: string;
  location?: string;
  status?: string;
  link?: string;
}

export const fetchEditJop = createAsyncThunk(
  "EditJop/fetchEditJop",
  async (
    {
      id,
      updatedData,
    }: {
      id: string;
      updatedData: UpdatedData;
    },
    thunkAPI
  ) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/updatejop/${id}`,
        updatedData
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Failed to edit job");
    }
  }
);

const EditJopSlice = createSlice({
  name: "EditJop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEditJop.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchEditJop.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";

        console.log(state.data);
      })
      .addCase(fetchEditJop.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "An error occurred";
      });
  },
});

export default EditJopSlice.reducer;
