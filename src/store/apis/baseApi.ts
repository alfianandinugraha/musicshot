import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  tagTypes: ["Track"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.napster.com/v2.2/",
  }),
  endpoints: () => {
    return {};
  },
});

export default baseApi;
