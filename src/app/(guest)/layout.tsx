// git commit -m "PBL-848 set up base"

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { ReactNode } from 'react';

type GuestLayoutProps = {
  children: ReactNode;
};

export default function GuestLayout({ children }: GuestLayoutProps) {
  return <MaxWidthWrapper>{children}</MaxWidthWrapper>;
}
