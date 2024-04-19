import {
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { IColumTable } from '@/types/IColumnTable';

type DataTableHeaderProps = {
  columns: IColumTable[];
};

export function DataTableHeader({ columns }: DataTableHeaderProps) {
  return (
    <TableHeader>
      <TableRow>
        <TableCell />
        {columns
          .filter((col) => !col.isHide)
          .map((col) => (
            <TableHead key={col.key}>{col.header}</TableHead>
          ))}
      </TableRow>
    </TableHeader>
  );
}
