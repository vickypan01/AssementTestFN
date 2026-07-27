import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useAppSelector } from "../../hooks/reduxhooks";

const VendorRatingDistribution = () => {
  const data = useAppSelector(
    (state) => state.dashboard.vendorRatingDistribution,
  );

  const options: Highcharts.Options = {
    chart: {
      type: "bar",
    },

    title: {
      text: "Vendor Rating Distribution",
    },

    xAxis: {
      categories: data.map((item) => item.rating),
      title: {
        text: "Rating",
      },
    },

    yAxis: {
      title: {
        text: "Number of Vendors",
      },
    },

    series: [
      {
        type: "bar",
        name: "Vendors",
        data: data.map((item) => item.value),
      },
    ],

    credits: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default VendorRatingDistribution;
