'use client';

import { matchService } from '@/services/matchService';
import { ICompanyResponse } from '@/types/ICompanyResponse';
import { IErrorResponse } from '@/types/IErrorResponse';
import { IUserResponse } from '@/types/IUserResponse';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

type IMatchResponse = {
  id: string;
  matched_time: string;
  user: IUserResponse & {
    avatar: string;
    summary_introduction: string;
    social_media_link: string[];
  };
  user_matched: boolean;
  company: ICompanyResponse;
  company_matched: boolean;
  created_at: string;
  updated_at: string;
};

export default function useMatchManagementHook() {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();

  const id = params.id;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [matches, setMatches] = useState<IMatchResponse[]>([]);
  const [selectedMatch, setSelectedMatch] = useState<IMatchResponse | null>(
    null,
  );

  const tableHeaders = ['', 'User', 'Company', 'Matched time'];

  useEffect(() => {
    if (!id || Array.isArray(id)) {
      return;
    }
    setIsLoading(true);
    matchService
      .getAccountMatches(id, 1, 10)
      .then((res) => {
        setMatches(res.data);
      })
      .catch((err: IErrorResponse) => {
        toast.error(err.error.message);
        router.push(pathname.split('/').slice(0, -1).join('/'));
      })
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  function unmatch() {
    if (selectedMatch === null) {
      return;
    }

    matchService
      .cancelMatch(selectedMatch.id)
      .then(() => {
        toast.success('Unmatched successfully');
        setSelectedMatch(null);
      })
      .catch((err: IErrorResponse) => toast.error(err.error.message))
      .finally(() => setIsLoading(false));
  }

  return {
    router,
    isLoading,
    tableHeaders,
    matches,
    selectedMatch,
    setSelectedMatch,
    unmatch,
  };
}
