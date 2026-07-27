import PerformanceCards from "./performanceCards";
import PerformanceTrend from "./performanceTrend";
import RecentIssues from "./recentIssues";

const Performance = () => {
  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Vendor Performance Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Monitor vendor quality, delivery performance, payment history,
          operational risks and recent issues.
        </p>
      </div>

      <PerformanceCards />

      <PerformanceTrend />

      <RecentIssues />
    </div>
  );
};

export default Performance;
