'use client';

import { adminService } from '@/services/adminService';
import { IColumTable } from '@/types/IColumnTable';
import { PaginationMetaProps } from '@/types/PaginationMetaProps';
import Constants from '@/utils/Constants';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function useTableHook(role: string, columns: IColumTable[]) {
  const router = useRouter();
  const pathname = usePathname();
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
    if (
      Constants.PAGINATION_NUMBER.findIndex((num) => num === perPage) === -1
    ) {
      const newPerPage = Constants.PAGINATION_NUMBER.reduce(
        function (prev, curr) {
          return Math.abs(curr - perPage) < Math.abs(prev - perPage)
            ? curr
            : prev;
        },
      );
      router.replace(pathname + `?page=${page}&per_page=${newPerPage}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perPage]);

  useEffect(() => {
    if (page < 1) {
      const newPage = Math.max(page, 1);
      router.replace(pathname + `?page=${newPage}&per_page=${perPage}`);
    }

    if (!isLoading && page > paginationMeta.total_page) {
      const newPage = Math.min(page, paginationMeta.total_page);
      router.replace(pathname + `?page=${newPage}&per_page=${perPage}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, page, perPage, paginationMeta.total_page]);

  useEffect(() => {
    setIsLoading(true);
    if (Constants.PAGINATION_NUMBER.findIndex((num) => num === perPage) === -1)
      return;

    if (page < 1 || page > paginationMeta.total_page) return;

    adminService.get(role, page, perPage).then((res: any) => {
      setData(res.data);
      setPaginationMeta(res.meta);
      setIsLoading(false);
    });
  }, [page, paginationMeta.total_page, perPage, role]);

  return { columns, data, isLoading, perPage, paginationMeta };
}
