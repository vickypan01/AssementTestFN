import ApprovalStatusCard from "./approvalStatusCard";
import ApprovalTimeline from "./approvalTimeline";
import ApprovalComments from "./approvalComments";
import ApprovalActions from "./approvalActions";

const ApprovalWorkflow = () => {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold">Vendor Approval Workflow</h1>

        <p className="mt-2 text-gray-500">
          Review vendor details before approving the vendor.
        </p>
      </div>

      <ApprovalStatusCard />

      <div className="grid gap-6 lg:grid-cols-2">
        <ApprovalTimeline />

        <ApprovalComments />
      </div>

      <ApprovalActions />
    </div>
  );
};

export default ApprovalWorkflow;
