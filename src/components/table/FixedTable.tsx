import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@/components/ui/table';
import { IColumTable } from '@/types/IColumnTable';
import { cn } from '@/utils';
import { Dispatch, HTMLAttributes, SetStateAction } from 'react';

type FixedTableProps = {
  page: number;
  perPage: number;
  columns: IColumTable[];
  selectedRows: string[];
  setSelectedRows: Dispatch<SetStateAction<any[]>>;
  selectedKey: string;
  data: any[];
} & HTMLAttributes<HTMLTableElement>;

export default function FixedTable({
  page,
  perPage,
  columns,
  selectedRows,
  setSelectedRows,
  selectedKey,
  data,
  className,
}: FixedTableProps) {
  return (
    <div className={cn('h-full w-fit min-w-[20%] border-r', className)}>
      <Table>
        <TableRow className="!bg-pink-800">
          <TableHead className="w-5 text-center"></TableHead>
          <TableHead className="w-5 text-center text-white">Ordinal</TableHead>

          {columns.map((col) => (
            <TableHead key={col.key} className="text-white">
              {col.header}
            </TableHead>
          ))}
        </TableRow>

        <TableBody>
          {data.map((row, idx) => {
            return (
              <TableRow key={idx} className="!bg-white odd:!bg-pink-100">
                <TableCell className="h-14 text-center">
                  <Checkbox
                    checked={selectedRows.includes(row[selectedKey])}
                    onCheckedChange={(checked) => {
                      if (!checked) {
                        setSelectedRows(
                          selectedRows.filter(
                            (selectedRow) => selectedRow !== row[selectedKey],
                          ),
                        );
                        return;
                      } else {
                        setSelectedRows([...selectedRows, row[selectedKey]]);
                      }
                    }}
                  />
                </TableCell>

                <TableCell className="h-14 text-center">
                  {((page - 1) * perPage + idx + 1).toLocaleString()}
                </TableCell>

                {columns
                  .filter((col) => !col.isHide)
                  .map((col) => (
                    <TableCell key={col.key} className="h-14 text-nowrap">
                      {col.cell(row)}
                    </TableCell>
                  ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
