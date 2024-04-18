import api from '@/utils/Api';

export const authService = {
  login(email: string, password: string) {
    return api.post('/admin/login', { email, password });
  },
  me() {
    return api.get('/auth/account');
  },
  logout() {
    return api.post('/auth/logout');
  },
};
