'use client';

import { adminService } from '@/services/adminService';
import { usePopupStore } from '@/store/popupStore';
import { IColumTable } from '@/types/IColumnTable';
import { IErrorResponse } from '@/types/IErrorResponse';
import { IPaginationMeta } from '@/types/IPaginationMeta';
import updateSearchParams from '@/utils';
import Constants from '@/utils/Constants';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function useTableHook(role: string, columnTable: IColumTable[]) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { openPopup, closePopup } = usePopupStore();

  const page = Number(searchParams.get('page') || 1);
  const perPage = Number(
    searchParams.get('per_page') || Constants.PAGINATION_NUMBER[0],
  );
  const sortBy = searchParams.get('sort_by') || '';
  const orderBy = searchParams.get('order_by') || '';

  const [columns, setColumns] = useState<IColumTable[]>(columnTable);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [paginationMeta, setPaginationMeta] = useState<IPaginationMeta>({
    current_page: 1,
    next_page: 1,
    previous_page: 1,
    total_page: 1,
    total_count: 0,
  });

  function getSelectedKey(cols: IColumTable[]) {
    const uniqueKey = cols.find((col) => col.isSelectedKey);
    return uniqueKey ? uniqueKey.key : 'id';
  }

  function activateSelectedAccounts() {
    openPopup(
      `Are you sure you want to activate ${selectedRows.length.toLocaleString()} account?`,
      () => {
        closePopup();
        setIsLoading(true);
        adminService
          .activate(selectedRows)
          .then(() => {
            getRows(page, perPage);
            setSelectedRows([]);
          })
          .catch((err: IErrorResponse) => toast.error(err.error.message))
          .finally(() => setIsLoading(false));
      },
    );
  }

  function deactivateSelectedAccounts() {
    openPopup(
      `Are you sure you want to deactivate ${selectedRows.length.toLocaleString()} account?`,
      () => {
        closePopup();
        setIsLoading(true);
        adminService
          .deactivate(selectedRows)
          .then(() => {
            getRows(page, perPage);
            setSelectedRows([]);
          })
          .catch((err: IErrorResponse) => toast.error(err.error.message))
          .finally(() => setIsLoading(false));
      },
    );
  }

  function getRows(paginatePage: number, paginatePerPage: number) {
    setIsLoading(true);
    adminService
      .get(role, paginatePage, paginatePerPage, sortBy, orderBy)
      .then((res: any) => {
        if (res.meta.current_page > res.meta.total_page) {
          router.replace(updateSearchParams({ page: res.meta.total_page }));
          return;
        }
        setData(res.data);
        setPaginationMeta(res.meta);
      })
      .catch((err: IErrorResponse) => toast.error(err.error.message))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    setIsLoading(true);

    let paginatePage = page < 1 ? 1 : page;
    let paginatePerPage = !Constants.PAGINATION_NUMBER.includes(perPage)
      ? Constants.PAGINATION_NUMBER[0]
      : perPage;

    if (page !== paginatePage || perPage !== paginatePerPage) {
      router.replace(
        updateSearchParams({ page: paginatePage, per_page: paginatePerPage }),
      );
    } else {
      getRows(paginatePage, paginatePerPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, perPage, role, sortBy, orderBy]);

  return {
    columns,
    selectedRows,
    data,
    isLoading,
    perPage,
    paginationMeta,
    setColumns,
    setSelectedRows,
    getSelectedKey,
    activateSelectedAccounts,
    deactivateSelectedAccounts,
  };
}
