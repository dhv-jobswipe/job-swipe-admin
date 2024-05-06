import { TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { IColumTable } from '@/types/IColumnTable';

type DataTableHeaderProps = {
  columns: IColumTable[];
};

export function DataTableHeader({ columns }: DataTableHeaderProps) {
  return (
    <TableHeader>
      <TableRow className="!bg-pink-800">
        {columns.map((col) => (
          <TableHead key={col.key} className="min-w-28 truncate text-white">
            {col.header}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
}
