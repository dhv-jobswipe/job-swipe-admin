import api from '@/utils/Api';

export const adminService = {
  get(type: string, page: number, paging: number, sort_by?: string) {
    return api.get('/admin', {
      params: { type, page, paging, sort_by, order: 'asc' },
    });
  },
  deactivate(ids: string[]) {
    return api.post('/admin/deactivate-account', ids);
  },
  activate(ids: string[]) {
    return api.post('/admin/activate-account', ids);
  },
};
