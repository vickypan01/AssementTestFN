import { Chart } from "react-google-charts";
import { useAppSelector } from "../../hooks/reduxhooks";

const VendorRatingDistribution = () => {
  const ratings = useAppSelector(
    (state) => state.dashboard.vendorRatingDistribution,
  );

  const data = [
    ["Rating", "Vendors"],
    ...ratings.map((item) => [item.rating, item.value]),
  ];

  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="350px"
      data={data}
      options={{
        title: "Vendor Rating Distribution",
        legend: { position: "none" },
      }}
    />
  );
};

export default VendorRatingDistribution;
