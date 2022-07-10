import baseApi from "@/store/apis/base-api";
import { Track } from "model";

const trackApi = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getAllTop: builder.query<Track[], void>({
        transformResponse(data: any) {
          return data?.tracks ?? [];
        },
        query: () => {
          return {
            url: "/tracks/top",
            params: {
              apikey: import.meta.env.VITE_APP_APIKEY,
            },
          };
        },
      }),
    };
  },
});

export const { useGetAllTopQuery } = trackApi;

export default trackApi;
