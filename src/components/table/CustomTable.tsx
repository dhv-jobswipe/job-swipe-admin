'use client';

import Loading from '@/components/Loading';
import { DataTableHeader } from '@/components/table/DataTableHeader';
import TablePagination from '@/components/table/TablePagination';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import useTableHook from '@/hooks/useTableHook';
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
                  <Loading />
                </TableCell>
              </TableRow>
            ) : (
              data.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    {(paginationMeta.current_page - 1) * perPage + idx + 1}
                  </TableCell>
                  {columns
                    .filter((col) => !col.isHide)
                    .map((col) => (
                      <TableCell key={col.key}>{col.cell(row)}</TableCell>
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
