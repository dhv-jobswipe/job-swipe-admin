'use client';

import { adminService } from '@/services/adminService';
import { IColumTable } from '@/types/IColumnTable';
import { PaginationMetaProps } from '@/types/PaginationMetaProps';
import Constants from '@/utils/Constants';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function useTableHook(role: string, columns: IColumTable[]) {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get('page') || 1);
  const perPage = Number(
    searchParams.get('per_page') || Constants.PAGINATION_NUMBER[0],
  );

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [paginationMeta, setPaginationMeta] = useState<PaginationMetaProps>({
    current_page: 1,
    next_page: 1,
    previous_page: 1,
    total_page: 1,
    total_count: 0,
  });

  useEffect(() => {
    setIsLoading(true);
    adminService.get(role, page, perPage).then((res: any) => {
      setData(res.data);
      setPaginationMeta(res.meta);
      setIsLoading(false);
    });
  }, [page, perPage, role]);

  return { columns, data, isLoading, perPage, paginationMeta };
}
