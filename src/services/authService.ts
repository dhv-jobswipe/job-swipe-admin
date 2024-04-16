import api from '@/utils/Api';

export const authService = {
  login(email: string, password: string) {
    return api.post('/admin/login', { email, password });
  },
  logout() {
    return api.post('/auth/logout');
  },
};
