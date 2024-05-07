import CustomTable from '@/components/table/CustomTable';
import Constants from '@/utils/Constants';
import { CompanyColumns } from './CompanyColumns';

export default function CompanyManagementContainer() {
  return (
    <main>
      <CustomTable
        columnTable={CompanyColumns}
        useHookFor={Constants.SYSTEM_ROLE.COMPANY}
        title="Companies in System"
      />
    </main>
  );
}
