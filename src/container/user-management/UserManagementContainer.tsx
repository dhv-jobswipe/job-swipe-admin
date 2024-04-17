import { UserColumns } from '@/container/user-management/UserColumns';
import UserDataTable from '@/container/user-management/UserTable';

export default function UserManagementContainer() {
  const data = [
    { id: '1', firstName: 'John', lastName: 'Doe' },
    { id: '2', firstName: 'Jane', lastName: 'Doe' },
    { id: '3', firstName: 'Alice', lastName: 'Smith' },
  ];

  return (
    <main>
      <UserDataTable columns={UserColumns} data={data} />
    </main>
  );
}
