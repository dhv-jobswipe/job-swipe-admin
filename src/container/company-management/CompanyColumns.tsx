'use client';

import { IColumTable } from '@/types/IColumnTable';
import moment from 'moment';

export const CompanyColumns: IColumTable[] = [
  {
    key: 'account_id',
    header: 'ID',
    cell: (row) => <div>{row.account_id}</div>,
    isFixed: false,
    isHide: true,
    enableHiding: true,
  },
  {
    key: 'account_status',
    header: 'Status',
    cell: (row) =>
      row.account_status ? (
        <div className="text-green-500">Active</div>
      ) : (
        <div className="text-red-500">Deactive</div>
      ),
    isFixed: false,
    isHide: false,
    enableHiding: false,
  },
  {
    key: 'email',
    header: 'Email',
    cell: (row) => <div>{row.email}</div>,
    isFixed: true,
    isHide: false,
    enableHiding: false,
  },
  {
    key: 'company_name',
    header: 'Company name',
    cell: (row) => <div>{row.company_name}</div>,
    isFixed: false,
    isHide: false,
    enableHiding: true,
  },
  {
    key: 'company_url',
    header: 'Company url',
    cell: (row) => <div>{row.company_url}</div>,
    isFixed: false,
    isHide: false,
    enableHiding: true,
  },
  {
    key: 'phone_number',
    header: 'Phone number',
    cell: (row) => <div>{row.phone_number}</div>,
    isFixed: false,
    isHide: false,
    enableHiding: true,
  },
  {
    key: 'system_role',
    header: 'Role',
    cell: (row) => <div>{row.system_role.constant_name}</div>,
    isFixed: false,
    isHide: true,
    enableHiding: true,
  },
  {
    key: 'created_at',
    header: 'Created',
    cell: (row) => <div>{moment(row.created_at).format('YYYY-MM-DD')}</div>,
    isFixed: false,
    isHide: true,
    enableHiding: true,
  },
  {
    key: 'updated_at',
    header: 'Updated',
    cell: (row) => <div>{moment(row.updated_at).format('YYYY-MM-DD')}</div>,
    isFixed: false,
    isHide: true,
    enableHiding: true,
  },
  {
    key: 'deleted_at',
    header: 'Deleted',
    cell: (row) => (
      <div>
        {row.deleted_at ? moment(row.deleted_at).format('YYYY-MM-DD') : ''}
      </div>
    ),
    isFixed: false,
    isHide: false,
    enableHiding: true,
  },
];
