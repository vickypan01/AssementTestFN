// app/store.ts

import { configureStore } from "@reduxjs/toolkit";
import { vendorApi } from "../services/vendorApi";
import dashboardReducer from "../services/chartd_data";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    [vendorApi.reducerPath]: vendorApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vendorApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
