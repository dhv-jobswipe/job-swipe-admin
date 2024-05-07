import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function useCreateConstant() {
  const form = useForm();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  function onSubmit() {}

  return { form, isLoading, onSubmit, setIsLoading };
}
