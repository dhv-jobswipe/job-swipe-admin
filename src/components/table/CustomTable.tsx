'use client';

import { DataTableHeader } from '@/components/table/DataTableHeader';
import TablePagination from '@/components/table/TablePagination';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import useTableHook from '@/hooks/useTableHook';
import ThinkingIcon from '@/icons/ThinkingIcon';
import { IColumTable } from '@/types/IColumnTable';
import Constants from '@/utils/Constants';

type CustomTableProps = {
  columnTable: IColumTable[];
};

export default function CustomTable({ columnTable }: CustomTableProps) {
  const { columns, data, isLoading, perPage, paginationMeta } = useTableHook(
    Constants.SYSTEM_ROLE.USER,
    columnTable,
  );

  return (
    <div className="flex flex-col space-y-4">
      <div className="rounded-md border">
        <Table>
          <DataTableHeader columns={columns} />

          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell rowSpan={perPage} colSpan={columns.length}>
                  <ThinkingIcon />
                </TableCell>
              </TableRow>
            ) : (
              data.map((row, idx) => (
                <TableRow key={idx}>
                  {columns
                    .filter((col) => !col.isHide)
                    .map((col) => (
                      <TableCell key={col.key}>{row[col.cell]()}</TableCell>
                    ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <TablePagination paginationMeta={paginationMeta} pageSize={perPage} />
    </div>
  );
}
