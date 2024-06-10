import api from '@/utils/Api';

export const matchService = {
  getAccountMatches(account_id: string, page: number, paging: number) {
    return api.get('admin/matches', { params: { account_id, page, paging } });
  },
  cancelMatch(match_id: string) {
    return api.patch(`admin/matches?match_id=${match_id}`);
  },
};
