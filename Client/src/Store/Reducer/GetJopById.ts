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
  Jops: Job;
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

export const fetchAllJopByid = createAsyncThunk(
  "allJops/fetchAllJops",
  async (id: string, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:3000/jop/${id}`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Failed to fetch jobs");
    }
  }
);

const GetALlJopByidSlice = createSlice({
  name: "allJops",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllJopByid.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchAllJopByid.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
      })
      .addCase(fetchAllJopByid.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "An error occurred";
      });
  },
});

export default GetALlJopByidSlice.reducer;
