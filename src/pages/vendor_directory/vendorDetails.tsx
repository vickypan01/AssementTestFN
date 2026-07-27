import { useParams } from "react-router-dom";
import { vendors } from "../../dummy_data/verdor_directory_data";

const VendorDetails = () => {
  const { vendorId } = useParams();

  const vendor = vendors.find((v) => v.id === Number(vendorId));

  if (!vendor) {
    return <div>Vendor Not Found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{vendor.vendorName}</h1>

      <div className="mt-5 grid grid-cols-3 gap-5">
        <div className="rounded-lg border p-4">
          <h3>Status</h3>

          <p>{vendor.overview.status}</p>
        </div>

        <div className="rounded-lg border p-4">
          <h3>Rating</h3>

          <p>{vendor.overview.rating}</p>
        </div>

        <div className="rounded-lg border p-4">
          <h3>Purchase Value</h3>

          <p>${vendor.purchaseHistory.totalPurchaseValue}</p>
        </div>
      </div>
    </div>
  );
};

export default VendorDetails;
