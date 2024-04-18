import api from '@/utils/Api';

export const adminService = {
  get(type: string, page: number, paging: number) {
    return api.get('/admin', { params: { type, page, paging } });
  },
};
