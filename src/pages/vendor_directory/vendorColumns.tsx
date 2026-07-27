import type { ColumnDef } from "@tanstack/react-table";
import type { Vendor } from "../../dummy_data/verdor_directory_data";

export const vendorColumns: ColumnDef<Vendor>[] = [
  {
    accessorKey: "vendorName",
    header: "Vendor Name",
  },
  {
    accessorKey: "vendorCode",
    header: "Vendor Code",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "contactPerson",
    header: "Contact Person",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "rating",
    header: "Rating",
    cell: ({ getValue }) => (
      <div className="flex items-center gap-1">⭐ {getValue<number>()}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue<string>();

      const styles = {
        Active: "bg-green-100 text-green-700",
        Pending: "bg-yellow-100 text-yellow-700",
        Inactive: "bg-red-100 text-red-700",
      };

      return (
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            styles[status as keyof typeof styles] ?? "bg-gray-100 text-gray-700"
          }`}
        >
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: "lastTransaction",
    header: "Last Transaction",
  },
  {
    accessorKey: "totalPurchaseValue",
    header: "Purchase Value",
    cell: ({ getValue }) => (
      <span className="font-semibold text-blue-600">
        ${Number(getValue()).toLocaleString()}
      </span>
    ),
  },
];
