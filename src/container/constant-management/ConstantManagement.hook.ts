// git commit -m "PBL-620 all constants"

'use client';

import { constantService } from '@/services/constantService';
import { useConstantStore } from '@/store/constantStore';
import { usePopupStore } from '@/store/popupStore';
import { IErrorResponse } from '@/types/IErrorResponse';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function useConstantManagementHook() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { openPopup, closePopup } = usePopupStore((state) => state);

  const tableHeaders = ['Type', 'Name', 'Note'];
  const {
    constantPrefixes,
    constantsByPrefix,
    getConstantPrefix,
    getConstantByPrefix,
  } = useConstantStore((state) => state);

  const [selectedConstants, setSelectedConstants] = useState<string[]>([]);

  const selectedPrefix = searchParams.get('prefix') || '';
  function setSelectedPrefix(value: string) {
    router.replace(pathname + `?prefix=${value}`);
  }

  function createConstantPath() {
    return pathname + `/create?prefix=${selectedPrefix}`;
  }

  function deleteConstants() {
    openPopup(
      `Are you sure you want to delete ${selectedConstants.length.toLocaleString()} account?`,
      () => {
        closePopup();
        constantService
          .deleteConstant(selectedConstants)
          .then(() => {
            setSelectedConstants([]);
            getConstantByPrefix(selectedPrefix);
          })
          .catch((e: IErrorResponse) => toast.error(e.error.message));
      },
    );
  }

  useEffect(() => {
    getConstantPrefix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (constantPrefixes.length === 0) return;
    if (!selectedPrefix) setSelectedPrefix(constantPrefixes[0].value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [constantPrefixes]);

  useEffect(() => {
    if (!selectedPrefix) return;
    getConstantByPrefix(selectedPrefix);
    setSelectedConstants([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPrefix]);

  return {
    tableHeaders,
    constantPrefixes,
    constantsByPrefix,
    selectedPrefix,
    selectedConstants,
    setSelectedConstants,
    setSelectedPrefix,
    createConstantPath,
    deleteConstants,
  };
}
