import { TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { IColumTable } from '@/types/IColumnTable';

type DataTableHeaderProps = {
  columns: IColumTable[];
};

export function DataTableHeader({ columns }: DataTableHeaderProps) {
  return (
    <TableHeader>
      <TableRow className="!bg-yellow-200">
        {columns.map((col) => (
          <TableHead key={col.key} className="min-w-28 truncate">
            {col.header}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
}
