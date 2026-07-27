import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";

import type { RootState } from "../../store/redux_store";
import type { MonthlyPurchaseValue } from "../../Type/type";

const MonthlyPurchase = () => {
  const data = useSelector(
    (state: RootState) => state.dashboard.monthlyPurchaseValue,
  ) as MonthlyPurchaseValue[];

  const options: Highcharts.Options = {
    chart: {
      type: "column",
    },

    title: {
      text: "Monthly Purchase Value",
    },

    xAxis: {
      categories: data.map((item: MonthlyPurchaseValue) => item.month),
      title: {
        text: "Month",
      },
    },

    yAxis: {
      title: {
        text: "Purchase Value",
      },
    },

    series: [
      {
        type: "column",
        name: "Purchase Value",
        data: data.map((item: MonthlyPurchaseValue) => item.value),
      },
    ],

    credits: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default MonthlyPurchase;
