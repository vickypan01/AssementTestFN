import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type {
  ApprovalComment,
  ApprovalStateWorkFlow,
  VendorApprovalStatus,
} from "../Type/type";

const getCurrentDate = () =>
  new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });

const initialState: ApprovalStateWorkFlow = {
  vendorId: 1001,

  vendorName: "Tech Solutions Pvt Ltd",

  status: "Pending",

  timeline: [
    {
      id: 1,
      title: "Vendor Created",
      user: "System",
      date: "20 Jul 2026 10:00 AM",
      status: "Pending",
    },
    {
      id: 2,
      title: "Documents Uploaded",
      user: "Vikas Pandey",
      date: "20 Jul 2026 10:15 AM",
      status: "Pending",
    },
    {
      id: 3,
      title: "Submitted For Approval",
      user: "Procurement Team",
      date: "20 Jul 2026 11:20 AM",
      status: "Pending",
    },
  ],

  comments: [
    {
      id: 1,
      user: "Finance Manager",
      date: "20 Jul 2026",
      message: "GST verified successfully.",
    },
    {
      id: 2,
      user: "Procurement Head",
      date: "21 Jul 2026",
      message: "Please verify cancelled cheque.",
    },
  ],
};

const approvalSlice = createSlice({
  name: "approval",

  initialState,

  reducers: {
    approveVendor(state) {
      state.status = "Approved";

      state.timeline.push({
        id: state.timeline.length + 1,
        title: "Vendor Approved",
        user: "Procurement Head",
        date: getCurrentDate(),
        status: "Approved",
      });
    },

    rejectVendor(state) {
      state.status = "Rejected";

      state.timeline.push({
        id: state.timeline.length + 1,
        title: "Vendor Rejected",
        user: "Procurement Head",
        date: getCurrentDate(),
        status: "Rejected",
      });
    },

    requestChanges(state) {
      state.status = "On Hold";

      state.timeline.push({
        id: state.timeline.length + 1,
        title: "Changes Requested",
        user: "Procurement Head",
        date: getCurrentDate(),
        status: "On Hold",
      });
    },

    addComment(state, action: PayloadAction<string>) {
      const newComment: ApprovalComment = {
        id: state.comments.length + 1,
        user: "Current User",
        date: getCurrentDate(),
        message: action.payload,
      };

      state.comments.unshift(newComment);
    },

    updateStatus(state, action: PayloadAction<VendorApprovalStatus>) {
      state.status = action.payload;
    },
  },
});

export const {
  approveVendor,
  rejectVendor,
  requestChanges,
  addComment,
  updateStatus,
} = approvalSlice.actions;

export default approvalSlice.reducer;
