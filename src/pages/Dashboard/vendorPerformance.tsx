import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/redux_store";

const VendorPerformanceTrend = () => {
  const data = useSelector(
    (state: RootState) => state.dashboard.vendorPerformanceTrend,
  );

  const options: Highcharts.Options = {
    title: {
      text: "Vendor Performance Trend",
    },
    xAxis: {
      categories: data.map((item) => item.month),
    },
    series: [
      {
        type: "line",
        name: "Vendors",
        data: data.map((item) => item.vendors),
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default VendorPerformanceTrend;
