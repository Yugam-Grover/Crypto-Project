import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from '@/lib/utils'
import React from 'react'
// {column, data, rowKey, tableClassName, headerRowClassName, headerCellClassName, bodyRowClassName, bodyCellClassName}
const DataTable = <T,>({columns, data, rowKey, tableClassName, headerRowClassName, headerCellClassName, bodyRowClassName, bodyCellClassName, headerClassName}: DataTableProps<T>) => {
  return (
   <Table className={cn('custom-scrollbar', tableClassName)}>
  <TableHeader className={cn('hover:bg-transparent!', headerClassName)}>
    <TableRow>
      {columns.map((column, i)=>(
        <TableHead key={i} className="bg-blue-50 text-blue-950 py-4 first:pl-5 last:pr-5">
            {column.header}
        </TableHead>
      ))}
    </TableRow>
  </TableHeader>
  <TableBody>
    {data.map((row, rowIndex)=>(
        <TableRow key={rowKey(row, rowIndex)} className={cn("overflow-hidden rounded-xl border-2 border-purple-900 hover:bg-blue-100 relative", bodyRowClassName)}>
            {columns.map((column, columnIndex)=>(
                <TableCell key={columnIndex} className={cn('py-4 first:pl-5 last:pr-5', bodyCellClassName)}>
                    {column.cell(row, rowIndex)}
                </TableCell>
            ))}
        </TableRow>
    ))}
  </TableBody>
</Table>
  )
}

export default DataTable
