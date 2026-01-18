import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SidebarSeparator } from "@/components/ui/sidebar";
import { useState } from "react";
import { SheetVersionHistory } from "./SheetVersionHistory";
import type { Table as TableType } from "@/app/backend/models/table";
import { SheetColumnList } from "./SheetColumnList";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const [rowData, setRowData] = useState({} as TData);

  return (
    <div className="overflow-hidden rounded-md border">
      <Table className="border-collapse border-l border-r">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="border text-center">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          <Sheet>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <SheetTrigger
                  key={row.id}
                  asChild
                  onClick={() => {
                    setRowData(row.original);
                  }}
                  className="hover:cursor-pointer"
                >
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="text-center border">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                </SheetTrigger>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No data available.
                </TableCell>
              </TableRow>
            )}

            <SheetContent className="w-1/4 min-w-100">
              <div>
                <SheetHeader>
                  <SheetTitle className="text-4xl">Table Details</SheetTitle>
                </SheetHeader>

                <SheetColumnList data={rowData as unknown as TableType} />

                <SidebarSeparator className="m-0 p-0" />
              </div>

              <div>
                <SheetHeader>
                  <SheetTitle className="text-4xl">Version History</SheetTitle>
                </SheetHeader>

                <SheetVersionHistory data={rowData as unknown as TableType} />

                <SidebarSeparator className="m-0 p-0" />
              </div>
            </SheetContent>
          </Sheet>
        </TableBody>
      </Table>
    </div>
  );
}
