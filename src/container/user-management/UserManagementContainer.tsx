// git commit -m "PBL-613 all users"

'use client';

import CustomTable from '@/components/table/CustomTable';
import { UserColumns } from '@/container/user-management/UserColumns';
import Constants from '@/utils/Constants';

export default function UserManagementContainer() {
  return (
    <main>
      <CustomTable
        columnTable={UserColumns}
        useHookFor={Constants.SYSTEM_ROLE.USER}
        title="Users in System"
      />
    </main>
  );
}
