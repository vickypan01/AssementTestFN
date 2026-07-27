import { createSlice } from "@reduxjs/toolkit";
import type { DashboardState } from "../Type/type";

const initialState = {
  vendorPerformanceTrend: [
    { month: "Jan", vendors: 12 },
    { month: "Feb", vendors: 18 },
    { month: "Mar", vendors: 22 },
    { month: "Apr", vendors: 30 },
    { month: "May", vendors: 36 },
    { month: "Jun", vendors: 42 },
  ],

  vendorCategoryDistribution: [
    { name: "IT", y: 35 },
    { name: "Manufacturing", y: 22 },
    { name: "Logistics", y: 18 },
    { name: "HR", y: 15 },
    { name: "Finance", y: 10 },
  ],

  monthlyPurchaseValue: [
    { month: "Jan", value: 120000 },
    { month: "Feb", value: 150000 },
    { month: "Mar", value: 210000 },
    { month: "Apr", value: 250000 },
    { month: "May", value: 320000 },
    { month: "Jun", value: 410000 },
  ],

  vendorRatingDistribution: [
    { rating: "1★", value: 2 },
    { rating: "2★", value: 8 },
    { rating: "3★", value: 15 },
    { rating: "4★", value: 48 },
    { rating: "5★", value: 95 },
  ],
} as DashboardState;

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
});

export default dashboardSlice.reducer;
