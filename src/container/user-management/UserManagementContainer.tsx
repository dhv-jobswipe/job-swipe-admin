'use client';

import { UserColumns } from '@/container/user-management/UserColumns';
import UserDataTable from '@/container/user-management/UserTable';

export default function UserManagementContainer() {
  // const searchParams = useSearchParams();

  // const page = Number(searchParams.get('page')) || 1;
  // const perPage = Number(searchParams.get('per_page')) || 10;

  const data = [
    { id: '1', firstName: 'John', lastName: 'Doe' },
    { id: '2', firstName: 'Jane', lastName: 'Doe' },
    { id: '3', firstName: 'Alice', lastName: 'Smith' },
  ];

  return (
    <main className="flex flex-col">
      <h1 className="text-xl font-semibold">Users in System</h1>

      <UserDataTable
        columns={UserColumns}
        data={data}
        // page={page}
        // perPage={perPage}
      />
    </main>
  );
}
