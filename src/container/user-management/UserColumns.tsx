'use client';

import { IColumTable } from '@/types/IColumnTable';

export const UserColumns: IColumTable[] = [
  {
    key: 'account_id',
    header: 'ID',
    cell: (row) => <span>{row.account_id}</span>,
    isHide: true,
  },
  {
    key: 'first_name',
    header: 'First name',
    cell: (row) => <span>{row.first_name}</span>,
  },
  {
    key: 'last_name',
    header: 'Last name',
    cell: (row) => <span>{row.last_name}</span>,
  },
];
