import { Chart } from "react-google-charts";
import { useAppSelector } from "../../hooks/reduxhooks";

const PerformanceTrend = () => {
  const trend = useAppSelector((state) => state.performance.trend);

  const data = [
    ["Month", "Performance"],
    ...trend.map((item) => [item.month, item.score]),
  ];

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <Chart
        chartType="LineChart"
        width="100%"
        height="420px"
        data={data}
        options={{
          title: "Vendor Performance Trend",
          legend: { position: "bottom" },
          curveType: "function",
          colors: ["#2563eb"],
          hAxis: {
            title: "Month",
          },
          vAxis: {
            title: "Performance Score",
          },
        }}
      />
    </div>
  );
};

export default PerformanceTrend;
