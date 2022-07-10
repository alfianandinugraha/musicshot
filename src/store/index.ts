import { configureStore } from "@reduxjs/toolkit";
import baseApi from "@/store/apis/base-api";
import trackSlice from "./slice/track-slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    track: trackSlice.reducer,
  },
});

type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
