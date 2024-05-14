// git commit -m "PBL-848 set up base"
// git commit -m "PBL-613 all users"

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { ReactNode } from 'react';

type GuestLayoutProps = {
  children: ReactNode;
};

export default function GuestLayout({ children }: GuestLayoutProps) {
  return <MaxWidthWrapper>{children}</MaxWidthWrapper>;
}
