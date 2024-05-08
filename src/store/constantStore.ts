import { constantService } from '@/services/constantService';
import { IConstant } from '@/types/IConstant';
import { IConstantPrefix } from '@/types/IConstantPrefix';
import { create } from 'zustand';

type IConstantState = {
  constantPrefixes: IConstantPrefix[];
  constantsByPrefix: IConstant[];

  getConstantByPrefix: (_prefix: string) => Promise<void>;
  getConstantPrefix: () => Promise<void>;
};

export const useConstantStore = create<IConstantState>((set) => ({
  constantPrefixes: [],
  constantsByPrefix: [],

  async getConstantByPrefix(_prefix) {
    const response = await constantService.getConstantByPrefix(_prefix);
    set((state) => ({
      ...state,
      constantsByPrefix: response.data as IConstant[],
    }));
  },
  async getConstantPrefix() {
    const response = await constantService.getConstantPrefix();
    set((state) => ({
      ...state,
      constantPrefixes: response.data as IConstantPrefix[],
    }));
  },
}));
