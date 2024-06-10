export type ICompanyResponse = {
  account_id: string;
  email: string;
  account_status: boolean;
  address: string;
  avatar: string;
  phone_number: string;
  system_role: {
    constant_id: string;
    constant_type: string;
    constant_name: string;
  };
  created_at: string;
  updated_at: string;
  company_name: string;
  company_url: string;
  established_date: string;
};
