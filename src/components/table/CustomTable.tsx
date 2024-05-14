// git commit -m "PBL-613 all users"
// git commit -m "PBL-615 hide columns of user table"
// git commit -m "PBL-616 hide columns of company table"
// git commit -m "PBL-617 show columns of company table"
// git commit -m "PBL-618 hide columns of company table"

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
import { ChevronDown, LockKeyhole, LockKeyholeOpen } from 'lucide-react';

type CustomTableProps = {
  columnTable: IColumTable[];
  title: string;
  useHookFor: string;
};

export default function CustomTable({
  columnTable,
  title,
  useHookFor,
}: CustomTableProps) {
  const {
    columns,
    selectedRows,
    data,
    isLoading,
    perPage,
    paginationMeta,
    setColumns,
    setSelectedRows,
    getSelectedKey,
    activateSelectedAccounts,
    deactivateSelectedAccounts,
  } = useTableHook(useHookFor, columnTable);

  if (isLoading)
    return (
      <div className="p-10">
        <Loading />
      </div>
    );

  return (
    <div className="mt-2 flex w-full flex-col space-y-4">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-xl font-semibold">{title}</h1>

        <div className="flex flex-row items-center justify-between gap-4">
          <Button
            variant="constructive"
            className="flex flex-row items-center justify-center gap-2"
            onClick={activateSelectedAccounts}
            disabled={selectedRows.length === 0}
          >
            <LockKeyholeOpen size={20} />
            <span>Activate</span>
          </Button>

          <Button
            variant="destructive"
            className="flex flex-row items-center justify-center gap-2"
            onClick={deactivateSelectedAccounts}
            disabled={selectedRows.length === 0}
          >
            <LockKeyhole size={20} />
            <span>Deactivate</span>
          </Button>

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
                      onCheckedChange={(value: boolean) =>
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
        </div>
      </div>

      <div className="flex flex-row items-start overflow-hidden rounded-lg border">
        <FixedTable
          page={paginationMeta.current_page}
          perPage={perPage}
          columns={columns.filter((col) => col.isFixed)}
          selectedRows={selectedRows}
          setSelectedRows={setSelectedRows}
          selectedKey={getSelectedKey(columns)}
          data={data}
        />

        <Table className="w-full flex-1 overflow-x-auto border-l-0">
          <DataTableHeader
            columns={columns.filter((col) => !col.isHide && !col.isFixed)}
          />

          <TableBody>
            {data.map((row, idx) => (
              <TableRow key={idx} className="!bg-white odd:!bg-pink-100">
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

      <TablePagination
        numberOfSelected={selectedRows.length}
        paginationMeta={paginationMeta}
        pageSize={perPage}
      />
    </div>
  );
}
