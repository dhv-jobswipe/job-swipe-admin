export type IUserResponse = {
  account_id: string;
  email: string;
  account_status: boolean;
  address: string;
  phone_number: string;
  system_role: {
    constant_id: string;
    constant_type: string;
    constant_name: string;
  };
  created_at: string;
  updated_at: string;
  first_name: string;
  last_name: string;
  gender: boolean;
  date_of_birth: string;
};
