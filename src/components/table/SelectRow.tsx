import { Checkbox } from '@/components/ui/checkbox';
import { Row } from '@tanstack/react-table';

type SelectRowProps = {
  row: Row<any>;
};

export default function SelectRow({ row }: SelectRowProps) {
  return (
    <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(!!value)}
      aria-label="Select row"
    />
  );
}
