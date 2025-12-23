/**
 * @author Ashraf Morningstar
 * @link https://github.com/AshrafMorningstar
 */


import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
  SortingState,
  ColumnFiltersState,
  VisibilityState,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, MoreHorizontal, ArrowUpDown } from "lucide-react";
import * as React from "react";

export type Order = {
  id: string;
  date: string;
  customer: string;
  category: string;
  status: "Pending" | "Completed" | "Cancelled";
  items: number;
  total: number;
};

const data: Order[] = [
  { id: "#25421", date: "Nov 1, 2023", customer: "Esther Howard", category: "Fashion", status: "Completed", items: 2, total: 240.00 },
  { id: "#25422", date: "Nov 2, 2023", customer: "Wade Warren", category: "Electronics", status: "Pending", items: 1, total: 140.00 },
  { id: "#25423", date: "Nov 2, 2023", customer: "Brooklyn Simmons", category: "Home & Garden", status: "Completed", items: 3, total: 340.00 },
  { id: "#25424", date: "Nov 3, 2023", customer: "Robert Fox", category: "Fashion", status: "Cancelled", items: 1, total: 120.50 },
  { id: "#25425", date: "Nov 4, 2023", customer: "Guy Hawkins", category: "Electronics", status: "Completed", items: 4, total: 540.00 },
  { id: "#25426", date: "Nov 5, 2023", customer: "Ralph Edwards", category: "Accessories", status: "Pending", items: 2, total: 210.00 },
];

export const columns: ColumnDef<Order>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "Order ID",
    cell: ({ row }) => <div className="font-medium text-foreground">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => <div className="text-muted-foreground">{row.getValue("date")}</div>,
  },
  {
    accessorKey: "customer",
    header: "Customer",
    cell: ({ row }) => <div className="font-medium">{row.getValue("customer")}</div>,
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => <div className="text-muted-foreground">{row.getValue("category")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
        const status = row.getValue("status") as string;
        return (
            <Badge variant={status === "Completed" ? "success" : status === "Pending" ? "warning" : "destructive"}>
                {status}
            </Badge>
        )
    },
  },
  {
    accessorKey: "items",
    header: "Items",
    cell: ({ row }) => <div className="text-muted-foreground">{row.getValue("items")} items</div>,
  },
  {
    accessorKey: "total",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="-ml-4 h-8"
          >
            Total
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
    },
    cell: ({ row }) => {
        const amount = parseFloat(row.getValue("total"))
        const formatted = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(amount)
        return <div className="font-medium tabular-nums">{formatted}</div>
    },
  }
];

export function RecentOrders() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  })

  return (
    <Card className="rounded-2xl border border-border/50 shadow-sm md:col-span-12">
      <CardHeader className="flex flex-row items-center justify-between py-6">
        <CardTitle className="text-lg font-semibold">Recent Orders</CardTitle>
        <div className="flex items-center gap-2">
            <div className="relative">
                <Input
                placeholder="Search orders..."
                value={(table.getColumn("customer")?.getFilterValue() as string) ?? ""}
                onChange={(event) =>
                    table.getColumn("customer")?.setFilterValue(event.target.value)
                }
                className="w-64 h-9 rounded-lg bg-secondary/30"
                />
            </div>
            <Button variant="outline" size="sm" className="h-9">
                Sort by <ChevronDown className="ml-2 h-3 w-3" />
            </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-border/50 overflow-hidden">
          <Table>
            <TableHeader className="bg-secondary/40">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="hover:bg-transparent border-border/50">
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} className="text-xs uppercase tracking-wider font-semibold text-muted-foreground/80 h-10">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className="border-border/50 odd:bg-transparent even:bg-secondary/20 hover:bg-secondary/40 text-sm py-2"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="py-3">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
            <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
            <div className="space-x-2">
            <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
            >
                Previous
            </Button>
            <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
            >
                Next
            </Button>
            </div>
        </div>
      </CardContent>
    </Card>
  )
}
