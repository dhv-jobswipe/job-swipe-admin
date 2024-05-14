// git commit -m "PBL-621 add constant"

'use client';

import { constantService } from '@/services/constantService';
import { useConstantStore } from '@/store/constantStore';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

export default function useCreateConstant() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { constantPrefixes, getConstantPrefix } = useConstantStore(
    (state) => state,
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formSchema = z.object({
    constant_prefix: z.string(),
    constant_name: z.string(),
    note: z.string().nullish(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      constant_prefix: searchParams.get('prefix') || '',
    },
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    getConstantPrefix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const { constant_name, constant_prefix, note } = values;
    constantService
      .createConstant(constant_prefix, constant_name, JSON.stringify(note))
      .then(() => {
        toast.success('Create constant successful.');
        router.push(
          pathname.replace('/create', '') + '?' + searchParams.toString(),
        );
      })
      .finally(() => setIsLoading(false));
  }

  return { form, isLoading, constantPrefixes, onSubmit };
}
