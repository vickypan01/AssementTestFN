import VendorPerformanceTrend from "./vendorPerformance";
import CategoryDistribution from "./categoryDistributtion";
import MonthlyPurchase from "./monthlyPurchase";
import VendorRatingDistribution from "./vendorRatingDistribution";

const Charts = () => {
  return (
    <>
      <VendorPerformanceTrend />
      <CategoryDistribution />
      <MonthlyPurchase />
      <VendorRatingDistribution />
    </>
  );
};

export default Charts;
