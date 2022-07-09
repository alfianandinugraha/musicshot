import { configureStore } from "@reduxjs/toolkit";
import baseApi from "@/store/apis/baseApi";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
});

export default store;
