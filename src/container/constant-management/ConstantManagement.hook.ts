import { constantService } from '@/services/constantService';
import { IErrorResponse } from '@/types/IErrorResponse';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

type IConstantPrefix = { value: string; prefix: string };

type IConstant = {
  constant_id: string;
  constant_type: string;
  constant_name: string;
};

export default function useConstantManagementHook() {
  const tableHeaders = ['ID', 'Type', 'Name'];
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [prefixConstants, setPrefixConstants] = useState<IConstantPrefix[]>([]);
  const [selectedPrefix, setSelectedPrefix] = useState<string>('');
  const [constants, setConstants] = useState<IConstant[]>([]);

  useEffect(() => {
    setIsLoading(true);
    constantService
      .getConstantPrefix()
      .then((res: any) => {
        const constantList = res.data as IConstantPrefix[];
        setPrefixConstants(constantList);
        setSelectedPrefix(constantList[0].value);
        setIsLoading(false);
      })
      .catch((err: IErrorResponse) => {
        toast.error(err.error.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!selectedPrefix) return;

    setIsLoading(true);
    constantService
      .getConstantByPrefix(selectedPrefix)
      .then((res: any) => {
        const constantList = res.data as IConstant[];
        setConstants(constantList);
        setIsLoading(false);
      })
      .catch((err: IErrorResponse) => {
        toast.error(err.error.message);
        setIsLoading(false);
      });
  }, [selectedPrefix]);

  return {
    isLoading,
    tableHeaders,
    prefixConstants,
    selectedPrefix,
    setSelectedPrefix,
    constants,
  };
}
