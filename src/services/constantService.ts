import api from '@/utils/Api';
import Constants from '@/utils/Constants';

export const constantService = {
  getConstantPrefix() {
    return api.get('constants/prefixes');
  },
  getConstantByPrefix(prefix: string) {
    return api.get('admin', {
      params: {
        type: Constants.SYSTEM_ROLE.CONSTANT,
        constant_type_prefix: prefix,
      },
    });
  },
  createConstant(constant_prefix: string, constant_name: string, note: string) {
    return api.post('admin/constant', { constant_prefix, constant_name, note });
  },
};
