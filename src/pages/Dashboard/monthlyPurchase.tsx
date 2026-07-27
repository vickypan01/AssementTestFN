import { Chart } from "react-google-charts";
import { useAppSelector } from "../../hooks/reduxhooks";

const MonthlyPurchase = () => {
  const purchases = useAppSelector(
    (state) => state.dashboard.monthlyPurchaseValue,
  );

  const data = [
    ["Month", "Purchase Value"],
    ...purchases.map((item) => [item.month, item.value]),
  ];

  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="350px"
      data={data}
      options={{
        title: "Monthly Purchase Value",
        legend: { position: "none" },
      }}
    />
  );
};

export default MonthlyPurchase;
