import { Chart } from "react-google-charts";
import { useAppSelector } from "../../hooks/reduxhooks";

const CategoryDistribution = () => {
  const categories = useAppSelector(
    (state) => state.dashboard.vendorCategoryDistribution,
  );

  const data = [
    ["Category", "Vendors"],
    ...categories.map((item) => [item.name, item.y]),
  ];

  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="350px"
      data={data}
      options={{
        title: "Category-wise Vendor Distribution",
        pieHole: 0.4,
      }}
    />
  );
};

export default CategoryDistribution;
