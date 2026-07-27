// services/vendorApi.ts

import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { type Vendor, vendors } from "../dummy_data/verdor_directory_data";

export const vendorApi = createApi({
  reducerPath: "vendorApi",

  baseQuery: fakeBaseQuery(),

  endpoints: (builder) => ({
    getVendors: builder.query<Vendor[], void>({
      queryFn: async () => {
        return {
          data: vendors,
        };
      },
    }),
  }),
});

export const { useGetVendorsQuery } = vendorApi;
