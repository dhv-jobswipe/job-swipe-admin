import { cn } from '@/utils';
import { ReactNode } from 'react';

type MaxWidthWrapperProps = {
  children: ReactNode;
  className?: string;
};

export default function MaxWidthWrapper({
  children,
  className,
}: MaxWidthWrapperProps) {
  return (
    <div className={cn('mx-auto w-full max-w-7xl px-4', className)}>
      {children}
    </div>
  );
}
