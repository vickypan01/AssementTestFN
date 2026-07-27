import { CheckCircle2, Clock3, PauseCircle, XCircle } from "lucide-react";

import { useAppSelector } from "../../hooks/reduxhooks";

const ApprovalStatusCard = () => {
  const approval = useAppSelector((state) => state.approval);

  const getStatus = () => {
    switch (approval.status) {
      case "Approved":
        return {
          color: "bg-green-100 text-green-700",
          icon: <CheckCircle2 size={22} />,
        };

      case "Rejected":
        return {
          color: "bg-red-100 text-red-700",
          icon: <XCircle size={22} />,
        };

      case "On Hold":
        return {
          color: "bg-gray-100 text-gray-700",
          icon: <PauseCircle size={22} />,
        };

      default:
        return {
          color: "bg-yellow-100 text-yellow-700",
          icon: <Clock3 size={22} />,
        };
    }
  };

  const status = getStatus();

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">{approval.vendorName}</h2>

          <p className="mt-2 text-gray-500">Vendor ID : {approval.vendorId}</p>
        </div>

        <div
          className={`flex items-center gap-2 rounded-full px-5 py-3 font-semibold ${status.color}`}
        >
          {status.icon}

          {approval.status}
        </div>
      </div>
    </div>
  );
};

export default ApprovalStatusCard;
