'use client';

import Loading from '@/components/Loading';
import { DataTableHeader } from '@/components/table/DataTableHeader';
import TablePagination from '@/components/table/TablePagination';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import useTableHook from '@/hooks/useTableHook';
import { IColumTable } from '@/types/IColumnTable';
import { changeValueInArrayObject } from '@/utils';
import Constants from '@/utils/Constants';
import { ChevronDown } from 'lucide-react';

type CustomTableProps = {
  columnTable: IColumTable[];
};

export default function CustomTable({ columnTable }: CustomTableProps) {
  const { columns, setColumns, data, isLoading, perPage, paginationMeta } =
    useTableHook(Constants.SYSTEM_ROLE.USER, columnTable);

  return (
    <div className="flex w-full flex-col space-y-4">
      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            {columns
              .filter((col) => col.enableHiding)
              .map((col) => (
                <DropdownMenuCheckboxItem
                  key={col.key}
                  className="capitalize"
                  checked={!col.isHide}
                  onCheckedChange={(value) =>
                    setColumns(
                      changeValueInArrayObject(
                        columns,
                        col.key,
                        'isHide',
                        !value,
                      ),
                    )
                  }
                >
                  {col.header}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="w-full overflow-x-auto rounded-md border">
        <Table>
          <DataTableHeader columns={columns} />

          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell rowSpan={perPage} colSpan={columns.length}>
                  <Loading />
                </TableCell>
              </TableRow>
            ) : (
              data.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell className="sticky left-0 bg-white">
                    {(paginationMeta.current_page - 1) * perPage + idx + 1}
                  </TableCell>
                  {columns
                    .filter((col) => !col.isHide)
                    .map((col) => (
                      <TableCell key={col.key} className="min-w-32 text-nowrap">
                        {col.cell(row)}
                      </TableCell>
                    ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {isLoading || (
        <TablePagination paginationMeta={paginationMeta} pageSize={perPage} />
      )}
    </div>
  );
}
