import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { store, RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost/8000/api",
  // prepareHeaders: (headers, { getState }) => {
  //   const token = (getState as RootState)
  // },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
