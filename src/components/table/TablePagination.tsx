import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { PaginationMetaProps } from '@/types/PaginationMetaProps';
import { usePathname } from 'next/navigation';

type TablePaginationProps = {
  pageSize: number;
  paginationMeta: PaginationMetaProps;
};

export default function TablePagination({
  pageSize,
  paginationMeta,
}: TablePaginationProps) {
  const pathname = usePathname();

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={
              pathname +
              `?page=${paginationMeta.previous_page}&per_page=${pageSize}`
            }
          >
            Previous
          </PaginationPrevious>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            href={pathname + `?page=1&per_page=${pageSize}`}
            isActive={paginationMeta.current_page !== 1}
          >
            1
          </PaginationLink>
        </PaginationItem>

        <PaginationEllipsis />

        <PaginationItem>
          <PaginationLink
            href={
              pathname +
              `?page=${paginationMeta.total_page}&per_page=${pageSize}`
            }
            isActive={paginationMeta.current_page !== paginationMeta.total_page}
          >
            {paginationMeta.total_page}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            href={
              pathname +
              `?page=${paginationMeta.next_page}&per_page=${pageSize}`
            }
          >
            Next
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
