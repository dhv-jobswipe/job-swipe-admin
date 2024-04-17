import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';

type PrivateLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  return (
    <div>
      <Navbar />
      <MaxWidthWrapper className="mt-20">{children}</MaxWidthWrapper>
    </div>
  );
}
