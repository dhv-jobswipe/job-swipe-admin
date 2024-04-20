'use client';

import { adminService } from '@/services/adminService';
import { IColumTable } from '@/types/IColumnTable';
import { PaginationMetaProps } from '@/types/PaginationMetaProps';
import Constants from '@/utils/Constants';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function useTableHook(role: string, columnTable: IColumTable[]) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get('page') || 1);
  const perPage = Number(
    searchParams.get('per_page') || Constants.PAGINATION_NUMBER[0],
  );

  const [columns, setColumns] = useState<IColumTable[]>(columnTable);

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

    let paginatePage = page < 1 ? 1 : page;
    let paginatePerPage = !Constants.PAGINATION_NUMBER.includes(perPage)
      ? Constants.PAGINATION_NUMBER[0]
      : perPage;

    if (page !== paginatePage || perPage !== paginatePerPage) {
      router.replace(
        pathname + `?page=${paginatePage}&per_page=${paginatePerPage}`,
      );
    } else {
      adminService
        .get(role, paginatePage, paginatePerPage)
        .then((res: any) => {
          if (res.meta.current_page > res.meta.total_page) {
            router.replace(
              pathname +
                `?page=${res.meta.total_page}&per_page=${paginatePerPage}`,
            );

            return;
          }
          setData(res.data);
          setPaginationMeta(res.meta);
          setIsLoading(false);
        })
        .catch(() => {
          toast.error('Failed to fetch data');
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, perPage, role]);

  return { columns, setColumns, data, isLoading, perPage, paginationMeta };
}
