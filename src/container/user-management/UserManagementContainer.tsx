'use client';

import CustomTable from '@/components/table/CustomTable';
import { UserColumns } from '@/container/user-management/UserColumns';
import Constants from '@/utils/Constants';

export default function UserManagementContainer() {
  return (
    <main className="flex flex-col space-y-4">
      <h1 className="text-xl font-semibold">Users in System</h1>
      <CustomTable
        columnTable={UserColumns}
        useHookFor={Constants.SYSTEM_ROLE.USER}
      />
    </main>
  );
}
