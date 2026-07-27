import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import type {
  ColumnDef,
  SortingState,
  ColumnFiltersState,
  VisibilityState,
} from "@tanstack/react-table";

interface DataGridProps<TData> {
  title?: string;
  columns: ColumnDef<TData, string>[];
  data: TData[];

  loading?: boolean;

  searchable?: boolean;
  sortable?: boolean;
  pagination?: boolean;
  stickyHeader?: boolean;
  responsive?: boolean;

  pageSize?: number;
}

function DataGrid<TData>({
  title = "",
  columns,
  data,

  loading = false,

  searchable = true,
  sortable = true,
  pagination = true,
  stickyHeader = true,

  pageSize = 10,
}: DataGridProps<TData>) {
  const [globalFilter, setGlobalFilter] = useState("");

  const [sorting, setSorting] = useState<SortingState>([]);

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data,

    columns,

    state: {
      globalFilter,
      sorting,
      columnFilters,
      columnVisibility,
    },

    onGlobalFilterChange: setGlobalFilter,

    onSortingChange: setSorting,

    onColumnFiltersChange: setColumnFilters,

    onColumnVisibilityChange: setColumnVisibility,

    getCoreRowModel: getCoreRowModel(),

    getFilteredRowModel: getFilteredRowModel(),

    getSortedRowModel: sortable ? getSortedRowModel() : getCoreRowModel(),

    getPaginationRowModel: pagination
      ? getPaginationRowModel()
      : getCoreRowModel(),

    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize,
      },
    },
  });

  return (
    <div className="w-full rounded-xl bg-white shadow-lg border border-gray-200">
      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b p-5">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>

        {searchable && (
          <input
            type="text"
            placeholder="Search..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="w-full md:w-80 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}
      </div>

      {/* Table */}

      <div className="overflow-auto max-h-[650px]">
        <table className="min-w-full border-collapse">
          <thead
            className={
              stickyHeader ? "sticky top-0 bg-gray-100 z-20" : "bg-gray-100"
            }
          >
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="cursor-pointer whitespace-nowrap border-b px-4 py-3 text-left text-sm font-semibold text-gray-700"
                  >
                    <div className="flex items-center gap-2">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}

                      {sortable &&
                        ({
                          asc: "▲",
                          desc: "▼",
                        }[header.column.getIsSorted() as string] ??
                          "⇅")}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={columns.length} className="p-8 text-center">
                  Loading...
                </td>
              </tr>
            ) : table.getRowModel().rows.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="p-8 text-center text-gray-500"
                >
                  No Records Found
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="transition hover:bg-blue-50">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="border-b px-4 py-3 text-sm">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}

      {pagination && (
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t p-4">
          <span className="text-sm text-gray-600">
            Page <strong>{table.getState().pagination.pageIndex + 1}</strong> of{" "}
            <strong>{table.getPageCount()}</strong>
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => table.firstPage()}
              disabled={!table.getCanPreviousPage()}
              className="rounded border px-3 py-2 disabled:opacity-40"
            >
              {"<<"}
            </button>

            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="rounded border px-3 py-2 disabled:opacity-40"
            >
              {"<"}
            </button>

            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="rounded border px-3 py-2 disabled:opacity-40"
            >
              {">"}
            </button>

            <button
              onClick={() => table.lastPage()}
              disabled={!table.getCanNextPage()}
              className="rounded border px-3 py-2 disabled:opacity-40"
            >
              {">>"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DataGrid;
