'use client';

import { useConstantStore } from '@/store/constantStore';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function useConstantManagementHook() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const tableHeaders = ['ID', 'Type', 'Name'];
  const {
    constantPrefixes,
    constantsByPrefix,
    getConstantPrefix,
    getConstantByPrefix,
  } = useConstantStore((state) => state);

  const selectedPrefix = searchParams.get('prefix') || '';
  function setSelectedPrefix(value: string) {
    router.replace(pathname + `?prefix=${value}`);
  }

  function createConstantPath() {
    return pathname + `/create?prefix=${selectedPrefix}`;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPrefix]);

  return {
    tableHeaders,
    constantPrefixes,
    constantsByPrefix,
    selectedPrefix,
    setSelectedPrefix,
    createConstantPath,
  };
}
