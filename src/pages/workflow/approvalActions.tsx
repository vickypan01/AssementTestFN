import { CheckCircle2, CircleX, RefreshCcw } from "lucide-react";

import { useAppDispatch } from "../../hooks/reduxhooks";

import {
  approveVendor,
  rejectVendor,
  requestChanges,
} from "../../services/workFlow_slice";

const ApprovalActions = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">Approval Actions</h2>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => dispatch(approveVendor())}
          className="flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-white transition hover:bg-green-700"
        >
          <CheckCircle2 size={20} />
          Approve
        </button>

        <button
          onClick={() => dispatch(rejectVendor())}
          className="flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-white transition hover:bg-red-700"
        >
          <CircleX size={20} />
          Reject
        </button>

        <button
          onClick={() => dispatch(requestChanges())}
          className="flex items-center gap-2 rounded-lg bg-yellow-500 px-6 py-3 text-white transition hover:bg-yellow-600"
        >
          <RefreshCcw size={20} />
          Request Changes
        </button>
      </div>
    </div>
  );
};

export default ApprovalActions;
