import { createSlice } from "@reduxjs/toolkit";
import type { VendorPerformanceState } from "../Type/type";

const initialState: VendorPerformanceState = {
  metrics: [
    {
      title: "Quality Score",
      value: 96,
      status: "Excellent",
      color: "green",
    },
    {
      title: "Delivery Score",
      value: 92,
      status: "Excellent",
      color: "green",
    },
    {
      title: "Response Time",
      value: "2.3 hrs",
      status: "Good",
      color: "blue",
    },
    {
      title: "Payment History",
      value: "98%",
      status: "Excellent",
      color: "green",
    },
    {
      title: "Risk Score",
      value: 18,
      status: "Good",
      color: "yellow",
    },
    {
      title: "Vendor Rating",
      value: 4.8,
      status: "Excellent",
      color: "green",
    },
  ],

  trend: [
    { month: "Jan", score: 82 },
    { month: "Feb", score: 84 },
    { month: "Mar", score: 88 },
    { month: "Apr", score: 90 },
    { month: "May", score: 92 },
    { month: "Jun", score: 95 },
  ],

  recentIssues: [
    {
      id: 1,
      issue: "Delayed shipment",
      severity: "High",
      date: "15 Jul 2026",
      status: "Resolved",
    },
    {
      id: 2,
      issue: "Invoice mismatch",
      severity: "Medium",
      date: "18 Jul 2026",
      status: "Open",
    },
    {
      id: 3,
      issue: "Incorrect packaging",
      severity: "Low",
      date: "20 Jul 2026",
      status: "Resolved",
    },
    {
      id: 4,
      issue: "Late response to RFQ",
      severity: "Medium",
      date: "22 Jul 2026",
      status: "Open",
    },
  ],
};

const performanceSlice = createSlice({
  name: "performance",
  initialState,
  reducers: {},
});

export default performanceSlice.reducer;
