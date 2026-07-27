import { CheckCircle2, Clock3, PauseCircle, XCircle } from "lucide-react";

import { useAppSelector } from "../../hooks/reduxhooks";

const ApprovalTimeline = () => {
  const timeline = useAppSelector((state) => state.approval.timeline);

  const getIcon = (status: string) => {
    switch (status) {
      case "Approved":
        return <CheckCircle2 className="text-green-600" size={22} />;

      case "Rejected":
        return <XCircle className="text-red-600" size={22} />;

      case "On Hold":
        return <PauseCircle className="text-gray-600" size={22} />;

      default:
        return <Clock3 className="text-yellow-600" size={22} />;
    }
  };

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">Approval Timeline</h2>

      <div className="space-y-6">
        {timeline.map((item, index) => (
          <div key={item.id} className="relative flex gap-4">
            <div className="flex flex-col items-center">
              {getIcon(item.status)}

              {index !== timeline.length - 1 && (
                <div className="mt-2 h-14 w-[2px] bg-gray-300" />
              )}
            </div>

            <div>
              <h3 className="font-semibold">{item.title}</h3>

              <p className="text-sm text-gray-500">{item.user}</p>

              <p className="text-xs text-gray-400">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApprovalTimeline;
