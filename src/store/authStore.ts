// git commit -m "PBL-515 refresh token for admin"

import { create } from 'zustand';

type IUserAuthState = {
  account_id: string;
  email: string;
};

type IAuthState = {
  isLoading: boolean;
  isAuthenticated: boolean;
  data: IUserAuthState;

  setMe: (_id: string, _email: string) => void;
};

export const useAuthStore = create<IAuthState>((set) => ({
  isLoading: true,
  isAuthenticated: false,
  data: {
    account_id: '',
    email: '',
  },
  setMe(account_id: string, email: string) {
    set(() => ({
      isLoading: false,
      isAuthenticated: true,
      data: {
        account_id,
        email,
      },
    }));
  },
}));
