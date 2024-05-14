// git commit -m "PBL-609 deactivate account"
// git commit -m "PBL-610 deactivate account"
// git commit -m "PBL-611 activate account"
// git commit -m "PBL-612 activate account"

import api from '@/utils/Api';

export const adminService = {
  get(
    type: string,
    page: number,
    paging: number,
    sort_by: string,
    order: string,
  ) {
    return api.get('/admin', {
      params: { type, page, paging, sort_by, order },
    });
  },
  deactivate(ids: string[]) {
    return api.post('/admin/deactivate-account', ids);
  },
  activate(ids: string[]) {
    return api.post('/admin/activate-account', ids);
  },
};
