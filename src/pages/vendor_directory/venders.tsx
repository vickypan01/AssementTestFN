import { useNavigate } from "react-router-dom";
import type { CellContext } from "@tanstack/react-table";

import DataGrid from "../../common_components/DataGrid/DataTable";
import { useGetVendorsQuery } from "../../services/vendorApi";
import { vendorColumns } from "./vendorColumns";
import type { Vendor } from "../../Type/type";

const VendorTable = () => {
  const navigate = useNavigate();

  const { data = [], isLoading, isError, error } = useGetVendorsQuery();

  const columns = vendorColumns.map((column) => {
    if (column.accessorKey === "vendorCode") {
      return {
        ...column,

        cell: ({ row }: CellContext<Vendor, unknown>) => {
          const vendor = row.original;

          return (
            <button
              className="
                  text-blue-600
                  hover:text-blue-800
                  font-medium
                  hover:underline
                "
              onClick={() => navigate(`/app/vendors/${vendor.id}`)}
            >
              {vendor.vendorCode}
            </button>
          );
        },
      };
    }

    return column;
  });

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
        columns={columns}
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
