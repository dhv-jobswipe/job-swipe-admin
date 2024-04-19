'use client';

import { IColumTable } from '@/types/IColumnTable';
import moment from 'moment';

export const UserColumns: IColumTable[] = [
  {
    key: 'account_id',
    header: 'ID',
    cell: (row) => <span>{row.account_id}</span>,
    isHide: true,
  },
  {
    key: 'account_status',
    header: 'Status',
    cell: (row) =>
      row.account_status ? (
        <span className="text-green-500">Active</span>
      ) : (
        <span className="text-red-500">Deactive</span>
      ),
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

  {
    key: 'phone_number',
    header: 'Phone number',
    cell: (row) => <span>{row.phone_number}</span>,
  },
  // {
  //   key: 'system_role',
  //   header: 'Role',
  //   cell: (row) => <span>{row.system_role.constant_name}</span>,
  // },
  {
    key: 'created_at',
    header: 'Created',
    cell: (row) => <span>{moment(row.created_at).format('YYYY-MM-DD')}</span>,
  },
  {
    key: 'updated_at',
    header: 'Updated',
    cell: (row) => <span>{moment(row.updated_at).format('YYYY-MM-DD')}</span>,
  },
  {
    key: 'deleted_at',
    header: 'Deleted',
    cell: (row) => (
      <span>
        {row.deleted_at ? moment(row.deleted_at).format('YYYY-MM-DD') : ''}
      </span>
    ),
  },
];
