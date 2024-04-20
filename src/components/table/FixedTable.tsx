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
import { HTMLAttributes } from 'react';

type FixedTableProps = {
  page: number;
  perPage: number;
  columns: IColumTable[];
  data: any[];
} & HTMLAttributes<HTMLTableElement>;

export default function FixedTable({
  page,
  perPage,
  columns,
  data,
  className,
}: FixedTableProps) {
  return (
    <div className={cn('h-full w-fit', className)}>
      <Table className="border">
        <TableRow className="!bg-yellow-200">
          <TableHead className="w-3 text-center">Checked</TableHead>
          <TableHead className="w-3 text-center">Ordinal</TableHead>

          {columns.map((col) => (
            <TableHead key={col.key}>{col.header}</TableHead>
          ))}
        </TableRow>

        <TableBody>
          {data.map((row, idx) => (
            <TableRow key={idx} className="!bg-white odd:!bg-blue-50">
              <TableCell className="h-14 text-center">
                <Checkbox />
              </TableCell>

              <TableCell className="h-14 text-center">
                {(page - 1) * perPage + idx + 1}
              </TableCell>

              {columns
                .filter((col) => !col.isHide)
                .map((col) => (
                  <TableCell key={col.key} className="h-14 text-nowrap">
                    {col.cell(row)}
                  </TableCell>
                ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
