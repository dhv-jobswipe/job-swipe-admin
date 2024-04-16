import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';

type GuestLayoutProps = {
  children: ReactNode;
};

export default function GuestLayout({ children }: GuestLayoutProps) {
  return (
    <>
      <Navbar isAuthenticated={false} />
      <MaxWidthWrapper>{children}</MaxWidthWrapper>
    </>
  );
}
