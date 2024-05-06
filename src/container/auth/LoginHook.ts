'use client';

import { authService } from '@/services/authService';
import { IErrorResponse } from '@/types/IErrorResponse';
import Constants from '@/utils/Constants';
import { setAppToken } from '@/utils/Cookies';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

export default function useLoginHook() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formSchema = z.object({
    email: z.string().trim().email(),
    password: z
      .string()
      .min(8)
      .max(32)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,32}$/, {
        message:
          'Password must contain at least one number, one uppercase letter and one lowercase letter.',
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    const { email, password } = values;
    authService
      .login(email, password)
      .then((response) => {
        setAppToken(response.data.access_token, response.data.refresh_token);

        toast.success('Login successful');
        setIsLoading(false);
        router.push(Constants.NAVBAR_LINK[0].href);
      })
      .catch((err: IErrorResponse) => {
        toast.error(err.error.message);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }

  return { form, isLoading, onSubmit };
}
