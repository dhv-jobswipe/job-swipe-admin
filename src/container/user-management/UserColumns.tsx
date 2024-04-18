'use client';

import { DataTableColumnHeader } from '@/components/table/DataTableColumnHeader';
import SelectHeader from '@/components/table/SelectHeader';
import SelectRow from '@/components/table/SelectRow';
import { User } from '@/types/User';
import { ColumnDef } from '@tanstack/react-table';

export const UserColumns: ColumnDef<User>[] = [
  {
    accessorKey: 'select',
    header: ({ table }) => <SelectHeader table={table} />,
    cell: ({ row }) => <SelectRow row={row} />,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: () => <div className="text-center">ID</div>,
    cell: ({ row }) => <div className="text-center">{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: 'firstName',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="First name"
        enableHiding={false}
      />
    ),
    cell: ({ row }) => <div>{row.getValue('firstName')}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: 'lastName',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Last name"
        enableHiding={true}
      />
    ),
    cell: ({ row }) => <div>{row.getValue('lastName')}</div>,
    enableSorting: true,
    enableHiding: true,
  },
];
