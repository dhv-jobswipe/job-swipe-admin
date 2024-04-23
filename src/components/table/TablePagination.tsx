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
import Constants from '@/utils/Constants';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

type TablePaginationProps = {
  pageSize: number;
  paginationMeta: IPaginationMeta;
};

export default function TablePagination({
  pageSize,
  paginationMeta,
}: TablePaginationProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center">
      <Pagination className="flex-1">
        <PaginationContent>
          <PaginationItem>
            <PaginationLink
              href={pathname + `?page=1&per_page=${pageSize}`}
              isActive={paginationMeta.current_page !== 1}
            >
              <ChevronsLeft className="h-4 w-4" />
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationPrevious
              href={
                pathname +
                `?page=${paginationMeta.previous_page}&per_page=${pageSize}`
              }
              isActive={paginationMeta.current_page !== 1}
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              href={
                pathname +
                `?page=${paginationMeta.next_page}&per_page=${pageSize}`
              }
              isActive={
                paginationMeta.current_page !== paginationMeta.total_page
              }
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink
              href={
                pathname +
                `?page=${paginationMeta.total_page}&per_page=${pageSize}`
              }
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
          onValueChange={(value) => {
            router.replace(pathname + `?page=1&per_page=${value}`);
          }}
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
