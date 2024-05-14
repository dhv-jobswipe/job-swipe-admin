// git commit -m "PBL-615 hide columns of user table"
// git commit -m "PBL-616 hide columns of company table"
// git commit -m "PBL-617 show columns of company table"

import { cn } from '@/utils/index';
import { HTMLAttributes } from 'react';

function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-muted', className)}
      {...props}
    />
  );
}

export { Skeleton };
