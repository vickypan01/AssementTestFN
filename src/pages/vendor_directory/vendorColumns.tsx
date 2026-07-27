import type { Vendor } from "../../Type/type";

export const vendorColumns = [
  {
    header: "Vendor Code",
    accessorKey: "vendorCode",
  },

  {
    header: "Vendor Name",
    accessorKey: "vendorName",
  },

  {
    header: "Category",
    accessorKey: "category",
  },

  {
    header: "Contact Person",
    accessorFn: (row: Vendor) => row.contacts.primaryContact,
  },

  {
    header: "City",
    accessorKey: "city",
  },

  {
    header: "Rating",
    accessorFn: (row: Vendor) => row.overview.rating,
  },

  {
    header: "Status",
    accessorFn: (row: Vendor) => row.overview.status,
  },

  {
    header: "Purchase Value",
    accessorFn: (row: Vendor) => row.purchaseHistory.totalPurchaseValue,
  },

  {
    header: "Active Orders",
    accessorFn: (row: Vendor) => row.purchaseHistory.activePurchaseOrders,
  },
];
