import { useAppSelector } from "../../hooks/reduxhooks";

const RecentIssues = () => {
  const issues = useAppSelector((state) => state.performance.recentIssues);

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-bold">Recent Issues</h2>

      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="px-4 py-3 text-left">Issue</th>
            <th className="px-4 py-3 text-left">Severity</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Date</th>
          </tr>
        </thead>

        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-3">{issue.issue}</td>

              <td className="px-4 py-3">
                <span
                  className={`rounded-full px-3 py-1 text-sm ${
                    issue.severity === "High"
                      ? "bg-red-100 text-red-600"
                      : issue.severity === "Medium"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-green-100 text-green-600"
                  }`}
                >
                  {issue.severity}
                </span>
              </td>

              <td className="px-4 py-3">
                <span
                  className={`rounded-full px-3 py-1 text-sm ${
                    issue.status === "Resolved"
                      ? "bg-green-100 text-green-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {issue.status}
                </span>
              </td>

              <td className="px-4 py-3">{issue.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentIssues;
