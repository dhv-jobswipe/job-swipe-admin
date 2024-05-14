// git commit -m "PBL-613 all users"
// git commit -m "PBL-615 hide columns of user table"
// git commit -m "PBL-616 hide columns of company table"
// git commit -m "PBL-617 show columns of company table"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { IPaginationMeta } from '@/types/IPaginationMeta';
import updateSearchParams from '@/utils';
import Constants from '@/utils/Constants';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

type TablePaginationProps = {
  numberOfSelected: number;
  pageSize: number;
  paginationMeta: IPaginationMeta;
};

export default function TablePagination({
  numberOfSelected,
  pageSize,
  paginationMeta,
}: TablePaginationProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
      <p className="text-sm">{`${numberOfSelected.toLocaleString()} of ${paginationMeta.total_count.toLocaleString()} row(s) selected.`}</p>

      <Pagination className="flex-1">
        <PaginationContent>
          <PaginationItem>
            <PaginationLink
              // href={pathname + `?page=1&per_page=${pageSize}`}
              href={updateSearchParams({ page: 1, per_page: pageSize })}
              isActive={paginationMeta.current_page !== 1}
            >
              <ChevronsLeft className="h-4 w-4" />
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationPrevious
              href={updateSearchParams({
                page: paginationMeta.previous_page,
                per_page: pageSize,
              })}
              isActive={paginationMeta.current_page !== 1}
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              href={updateSearchParams({
                page: paginationMeta.next_page,
                per_page: pageSize,
              })}
              isActive={
                paginationMeta.current_page !== paginationMeta.total_page
              }
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink
              href={updateSearchParams({
                page: paginationMeta.total_page,
                per_page: pageSize,
              })}
              isActive={
                paginationMeta.current_page !== paginationMeta.total_page
              }
            >
              <ChevronsRight className="h-4 w-4" />
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <div className="flex items-center space-x-2">
        <p className="text-sm font-medium">Rows per page</p>
        <Select
          value={`${pageSize}`}
          onValueChange={(value) =>
            router.replace(updateSearchParams({ page: 1, per_page: value }))
          }
        >
          <SelectTrigger className="h-8 w-[70px]">
            <SelectValue placeholder={pageSize} />
          </SelectTrigger>

          <SelectContent side="top">
            {Constants.PAGINATION_NUMBER.map((size) => (
              <SelectItem key={size} value={`${size}`}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
