import VendorPerformanceTrend from "./vendorPerformance";
import CategoryDistribution from "./categoryDistributtion";
import MonthlyPurchase from "./monthlyPurchase";
import VendorRatingDistribution from "./vendorRatingDistribution";

const Charts = () => {
  return (
    <div className="mt-8">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">
        Vendor Analytics Dashboard
      </h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <VendorPerformanceTrend />
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <CategoryDistribution />
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <MonthlyPurchase />
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <VendorRatingDistribution />
        </div>
      </div>
    </div>
  );
};

export default Charts;
