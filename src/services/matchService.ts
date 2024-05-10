import api from '@/utils/Api';

export const matchService = {
  getAccountMatches(account_id: string, page: number, paging: number) {
    return api.get('admin/matches', { params: { account_id, page, paging } });
  },
};
