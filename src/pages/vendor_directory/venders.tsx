import DataGrid from "../../common_components/DataGrid/DataTable";
import { useGetVendorsQuery } from "../../services/vendorApi";
import { vendorColumns } from "./vendorColumns";

const VendorTable = () => {
  const { data = [], isLoading, isError, error } = useGetVendorsQuery();

  if (isError) {
    return (
      <div className="rounded-lg bg-red-100 p-5 text-red-600">
        {JSON.stringify(error)}
      </div>
    );
  }

  return (
    <div className="p-6">
      <DataGrid
        title="Vendor Directory"
        columns={vendorColumns}
        data={data}
        loading={isLoading}
        searchable
        sortable
        pagination
        stickyHeader
        responsive
      />
    </div>
  );
};

export default VendorTable;
