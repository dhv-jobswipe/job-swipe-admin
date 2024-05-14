// git commit -m "PBL-613 all users"
// git commit -m "PBL-609 deactivate account"
// git commit -m "PBL-610 deactivate account"
// git commit -m "PBL-611 activate account"
// git commit -m "PBL-612 activate account"

'use client';

import { IColumTable } from '@/types/IColumnTable';
import moment from 'moment';

export const UserColumns: IColumTable[] = [
  {
    key: 'account_id',
    header: 'ID',
    cell: (row) => <div>{row.account_id}</div>,
    isSelectedKey: true,
    isFixed: false,
    isHide: true,
    enableHiding: true,
    enableSort: false,
  },
  {
    key: 'account_status',
    header: 'Status',
    cell: (row) =>
      !row.deleted_at ? (
        <div className="font-semibold text-green-500">Active</div>
      ) : (
        <div className="font-semibold text-destructive">Deactive</div>
      ),
    isSelectedKey: false,
    isFixed: false,
    isHide: false,
    enableHiding: false,
    enableSort: false,
  },
  {
    key: 'email',
    header: 'Email',
    cell: (row) => <div>{row.email}</div>,
    isSelectedKey: false,
    isFixed: true,
    isHide: false,
    enableHiding: false,
    enableSort: true,
  },
  {
    key: 'first_name',
    header: 'First name',
    cell: (row) => <div>{row.first_name}</div>,
    isSelectedKey: false,
    isFixed: false,
    isHide: false,
    enableHiding: true,
    enableSort: true,
  },
  {
    key: 'last_name',
    header: 'Last name',
    cell: (row) => <div>{row.last_name}</div>,
    isSelectedKey: false,
    isFixed: false,
    isHide: false,
    enableHiding: true,
    enableSort: true,
  },
  {
    key: 'phone_number',
    header: 'Phone number',
    cell: (row) => <div>{row.phone_number}</div>,
    isSelectedKey: false,
    isFixed: false,
    isHide: false,
    enableHiding: true,
    enableSort: false,
  },
  {
    key: 'system_role',
    header: 'Role',
    cell: (row) => <div>{row.system_role.constant_name}</div>,
    isSelectedKey: false,
    isFixed: false,
    isHide: true,
    enableHiding: true,
    enableSort: false,
  },
  {
    key: 'created_at',
    header: 'Created',
    cell: (row) => <div>{moment(row.created_at).format('YYYY-MM-DD')}</div>,
    isSelectedKey: false,
    isFixed: false,
    isHide: true,
    enableHiding: true,
    enableSort: true,
  },
  {
    key: 'updated_at',
    header: 'Updated',
    cell: (row) => <div>{moment(row.updated_at).format('YYYY-MM-DD')}</div>,
    isSelectedKey: false,
    isFixed: false,
    isHide: true,
    enableHiding: true,
    enableSort: true,
  },
  {
    key: 'deleted_at',
    header: 'Deleted',
    cell: (row) => (
      <div>
        {row.deleted_at ? moment(row.deleted_at).format('YYYY-MM-DD') : ''}
      </div>
    ),
    isSelectedKey: false,
    isFixed: false,
    isHide: false,
    enableHiding: true,
    enableSort: true,
  },
];
