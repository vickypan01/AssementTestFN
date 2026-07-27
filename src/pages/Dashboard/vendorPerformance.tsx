import { Chart } from "react-google-charts";
import { useAppSelector } from "../../hooks/reduxhooks";

const VendorPerformanceTrend = () => {
  const chartData = useAppSelector(
    (state) => state.dashboard.vendorPerformanceTrend,
  );

  const data = [
    ["Month", "Vendors"],
    ...chartData.map((item) => [item.month, item.vendors]),
  ];

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="350px"
      data={data}
      options={{
        title: "Vendor Performance Trend",
        legend: { position: "bottom" },
        curveType: "function",
      }}
    />
  );
};

export default VendorPerformanceTrend;
