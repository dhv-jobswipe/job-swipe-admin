// git commit -m "PBL-613 all users"
// git commit -m "PBL-615 hide columns of user table"
// git commit -m "PBL-616 hide columns of company table"

'use client';

import { TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { IColumTable } from '@/types/IColumnTable';
import updateSearchParams from '@/utils';
import {
  AlignJustify,
  ArrowDownWideNarrow,
  ArrowUpNarrowWide,
} from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

type DataTableHeaderProps = {
  columns: IColumTable[];
};

export function DataTableHeader({ columns }: DataTableHeaderProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const sortByHeader = searchParams.get('sort_by') || '';
  const orderByHeader = searchParams.get('order_by') || '';

  return (
    <TableHeader>
      <TableRow className="!bg-pink-800">
        {columns.map((col) => (
          <TableHead key={col.key} className="min-w-28 truncate text-white">
            {col.enableSort ? (
              <button
                className="flex flex-row items-center justify-center gap-2"
                onClick={() => {
                  if (sortByHeader === col.key) {
                    router.replace(
                      updateSearchParams({
                        order_by: orderByHeader === 'asc' ? 'desc' : 'asc',
                      }),
                    );
                  } else {
                    router.replace(
                      updateSearchParams({ sort_by: col.key, order_by: 'asc' }),
                    );
                  }
                }}
              >
                <span>{col.header}</span>
                {sortByHeader === col.key ? (
                  <>
                    {orderByHeader === 'asc' ? (
                      <ArrowUpNarrowWide color="#ffffff" />
                    ) : (
                      <ArrowDownWideNarrow color="#ffffff" />
                    )}
                  </>
                ) : (
                  <AlignJustify color="#ffffff" />
                )}
              </button>
            ) : (
              col.header
            )}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
}
