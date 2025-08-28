"use client"

import { type ColumnDef } from "@tanstack/react-table"
import { SupabaseTableSchema } from "~/routes/resources/supabaseTableSchema"
import { MoreHorizontal } from "lucide-react"
import { ArrowUpDown } from "lucide-react"

import { Button } from "~/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { Checkbox } from "~/components/ui/checkbox"
import { DataTableColumnHeader } from "./data-table-column-header"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<SupabaseTableSchema>[] = [
    {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
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
    header: ( { column }) => (
        <DataTableColumnHeader column={column} title="ID" />
    ),
  },
  {
    accessorKey: "apellido_familia",
    header: ( { column }) => (
        <DataTableColumnHeader column={column} title="Apellido Familiar" />
    ),
  },
  {
    accessorKey: "numero_asistentes",

    header: ( { column }) => (
        <DataTableColumnHeader column={column} title="Número de Asistentes" />
    ),
  },
  {
    accessorKey: "telefono",

    header: ( { column }) => (
        <DataTableColumnHeader column={column} title="Teléfono" />
    ),
  },
  {
    accessorKey: "fecha_confirmacion",
    header: ( { column }) => (
        <DataTableColumnHeader column={column} title="Fecha de Confirmación" />
    ),
  },
  {
    accessorKey: "created_at",
    header: ( { column }) => (
        <DataTableColumnHeader column={column} title="Fecha de Creación" />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const asistente = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-2 w-2 p-0">
              <span className="sr-only">Abrir menú</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-amber-100 font-serif">
            <DropdownMenuLabel className="font-bold">Acciones</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(asistente.apellido_familia)}
            >
              Copiar Apellido Familiar
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(asistente.telefono)}
            >
              Copiar Teléfono
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
