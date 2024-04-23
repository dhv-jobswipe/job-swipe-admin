import CustomTable from '@/components/table/CustomTable';
import Constants from '@/utils/Constants';
import { CompanyColumns } from './CompanyColumns';

export default function CompanyManagementContainer() {
  return (
    <main>
      <h1 className="text-xl font-semibold">Companies in System</h1>
      <CustomTable
        columnTable={CompanyColumns}
        useHookFor={Constants.SYSTEM_ROLE.COMPANY}
      />
    </main>
  );
}
