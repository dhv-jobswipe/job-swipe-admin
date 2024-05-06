import { constantService } from '@/services/constantService';
import { IErrorResponse } from '@/types/IErrorResponse';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

type IConstantPrefix = { value: string; prefix: string };

export default function useConstantManagementHook() {
  const [prefixConstants, setPrefixConstants] = useState<IConstantPrefix[]>([]);
  const [selectedPrefix, setSelectedPrefix] = useState<string>('');

  useEffect(() => {
    constantService
      .getConstantPrefix()
      .then((res: any) => {
        const constantList = res.data as IConstantPrefix[];
        setPrefixConstants(constantList);
      })
      .catch((err: IErrorResponse) => {
        toast.error(err.error.message);
      });
  }, []);

  useEffect(() => {
    if (!selectedPrefix) return;

    constantService.getConstantByPrefix(selectedPrefix);
    // .then((res: any) => {
    //   console.log(res);
    // });
  }, [selectedPrefix]);

  return { prefixConstants, selectedPrefix, setSelectedPrefix };
}
