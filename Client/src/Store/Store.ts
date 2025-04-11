import { configureStore } from "@reduxjs/toolkit";
import getAllJopsReducer from "./Reducer/GetAllJops";
import getJopByidReducer from "./Reducer/GetJopById";

export const Store = configureStore({
  reducer: {
    Jops: getAllJopsReducer,
    jopByid: getJopByidReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
