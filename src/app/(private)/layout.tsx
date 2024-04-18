'use client';

import Loading from '@/components/Loading';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Navbar from '@/components/Navbar';
import { authService } from '@/services/authService';
import { useAuthStore } from '@/store/authStore';
import Constants from '@/utils/Constants';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

type PrivateLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  const router = useRouter();
  const { setMe } = useAuthStore();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    authService
      .me()
      .then((response) => {
        setMe(response.data.account_id, response.data.email);
        setIsLoading(false);
      })
      .catch(() => router.push(Constants.PUBLIC_ROUTES[0]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <MaxWidthWrapper className="mt-20">{children}</MaxWidthWrapper>
    </>
  );
}
