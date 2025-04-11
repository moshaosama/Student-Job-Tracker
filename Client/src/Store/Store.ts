import { configureStore } from "@reduxjs/toolkit";
import getAllJopsReducer from "./Reducer/GetAllJops";
import getJopByidReducer from "./Reducer/GetJopById";
import getFilteredJopReducer from "./Reducer/FilterJop";

export const Store = configureStore({
  reducer: {
    Jops: getAllJopsReducer,
    jopByid: getJopByidReducer,
    filteredJop: getFilteredJopReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
