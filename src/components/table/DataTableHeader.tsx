import { TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { IColumTable } from '@/types/IColumnTable';

type DataTableHeaderProps = {
  columns: IColumTable[];
};

export function DataTableHeader({ columns }: DataTableHeaderProps) {
  return (
    <TableHeader>
      <TableRow>
        {columns.map((column) => (
          <TableHead key={column.key}>{column.header}</TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
}
