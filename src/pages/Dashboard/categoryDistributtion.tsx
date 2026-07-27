import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useAppSelector } from "../../hooks/reduxhooks";

const CategoryDistribution = () => {
  const data = useAppSelector(
    (state) => state.dashboard.vendorCategoryDistribution,
  );

  const options: Highcharts.Options = {
    chart: {
      type: "pie",
    },

    title: {
      text: "Category-wise Vendor Distribution",
    },

    series: [
      {
        type: "pie",
        name: "Vendors",
        data: data,
      },
    ],

    credits: {
      enabled: false,
    },
  };

  console.log("HighchartsReact:", HighchartsReact);
  console.log("typeof HighchartsReact:", typeof HighchartsReact);

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default CategoryDistribution;
