'use client';

import { User } from '@/types/User';
import { ColumnDef } from '@tanstack/react-table';

export const UserColumns: ColumnDef<User>[] = [
  {
    accessorKey: 'id',
    header: () => <div className="text-center">ID</div>,
    cell: ({ row }) => {
      const id = String(row.getValue('id'));

      return <div className="text-center">{id}</div>;
    },
  },
  {
    accessorKey: 'firstName',
    header: 'First name',
  },
  {
    accessorKey: 'lastName',
    header: 'Last name',
  },
];
