"use client"
import * as React from "react"

import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"

import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { DataTablePagination } from "./data-table-pagination"
import { DataTableViewOptions } from "./data-table-view-options"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>(
        []
    );
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    );

    const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

  return (
    <div className="bg-gradient-to-b from-amber-50/10 via-amber-100/20 via-amber-150/30 to-amber-200/40 p-8 rounded-3xl shadow-xl border border-stone-200/50 backdrop-blur-md md:backdrop-blur-sm font-serif">
      <div className="flex items-center py-4 ">
        <Input
          placeholder="Filtrar por apellido..."
          value={(table.getColumn("apellido_familia")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("apellido_familia")?.setFilterValue(event.target.value)
          }
          className="max-w-sm bg-stone-100 border border-stone-300"
        />
        <DataTableViewOptions table={table} />
      </div>
    <div className="overflow-hidden rounded-md border mb-4">
      <Table className="text-lg bg-stone-100/50">
        <TableHeader className="text-xl bg-gradient-to-b from-amber-50/10 via-amber-100/20 via-amber-150/30 to-amber-200/40">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
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
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="border">
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
    <DataTablePagination table={table} />
    </div>
  )
}
