'use client';

import { matchService } from '@/services/matchService';
import { IErrorResponse } from '@/types/IErrorResponse';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function useMatchManagementHook() {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();

  const id = params.id;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [matches, setMatches] = useState<any[]>([]);

  useEffect(() => {
    if (!id || Array.isArray(id)) {
      return;
    }
    setIsLoading(true);
    matchService
      .getAccountMatches(id, 1, 10)
      .then((res) => setMatches(res.data))
      .catch((err: IErrorResponse) => {
        toast.error(err.error.message);
        router.push(pathname.split('/').slice(0, -1).join('/'));
      })
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return {
    isLoading,
    matches,
  };
}
