'use client';

import Loading from '@/components/Loading';
import { DataTableHeader } from '@/components/table/DataTableHeader';
import FixedTable from '@/components/table/FixedTable';
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

  if (isLoading) return <Loading />;

  return (
    <div className="flex w-full flex-col space-y-4">
      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              <span>Columns</span>
              <ChevronDown className="ml-2 h-4 w-4" />
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

      <div className="flex flex-row items-start">
        <FixedTable
          page={paginationMeta.current_page}
          perPage={perPage}
          columns={columns.filter((col) => col.isFixed)}
          data={data}
        />

        <Table className="w-full flex-1 overflow-x-auto border border-l-0">
          <DataTableHeader
            columns={columns.filter((col) => !col.isHide && !col.isFixed)}
          />

          <TableBody>
            {data.map((row, idx) => (
              <TableRow key={idx} className="!bg-white odd:!bg-blue-50">
                {columns
                  .filter((col) => !col.isHide && !col.isFixed)
                  .map((col) => (
                    <TableCell
                      key={col.key}
                      className="h-14 min-w-28 text-nowrap"
                    >
                      {col.cell(row)}
                    </TableCell>
                  ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <TablePagination paginationMeta={paginationMeta} pageSize={perPage} />
    </div>
  );
}
