// git commit -m "PBL-613 all users"

import ThinkingIcon from '@/icons/ThinkingIcon';
import { cn } from '@/utils';
import { HTMLAttributes } from 'react';

type LoadingProps = {
  spinnerClassName?: string;
  svgClassName?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function Loading({
  spinnerClassName,
  svgClassName,
  className,
}: LoadingProps) {
  return (
    <div
      className={cn(
        'relative flex h-full items-center justify-center',
        className,
      )}
    >
      <div
        className={cn(
          'absolute h-52 w-52 animate-spin rounded-full border-b-4 border-t-4 border-purple-500',
          spinnerClassName,
        )}
      ></div>
      <ThinkingIcon className={cn('h-48 w-48 rounded-full', svgClassName)} />
    </div>
  );
}
