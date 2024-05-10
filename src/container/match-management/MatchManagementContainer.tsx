'use client';

import useMatchManagementHook from '@/container/match-management/MatchManagement.hook';

export default function MatchManagementContainer() {
  const { isLoading } = useMatchManagementHook();

  return <div>{isLoading}</div>;
}
