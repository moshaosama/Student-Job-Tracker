import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Job {
  _id: string;
  company: string;
  location: string;
  role: string;
  status: string;
  date: string;
  link: string;
}

interface DataType {
  statusbar: string;
  Jops: Job[];
}

interface initialStateData {
  data: DataType | null;
  error: string;
  loading: boolean;
}

const initialState: initialStateData = {
  data: null,
  error: "",
  loading: false,
};

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
