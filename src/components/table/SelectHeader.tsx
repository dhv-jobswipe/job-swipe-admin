import { Checkbox } from '@/components/ui/checkbox';
import { Table } from '@tanstack/react-table';

type SelectHeaderProps = {
  table: Table<any>;
};

export default function SelectHeader({ table }: SelectHeaderProps) {
  return (
    <Checkbox
      checked={
        table.getIsAllPageRowsSelected() ||
        (table.getIsSomePageRowsSelected() && 'indeterminate')
      }
      onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      aria-label="Select all"
    />
  );
}
