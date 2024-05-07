'use client';

import FormInput from '@/components/FormInput';
import { Form } from '@/components/ui/form';
import useCreateConstant from '@/container/create-constant/CreateConstant.hook';

export default function CreateConstantContainer() {
  const { form, isLoading, onSubmit } = useCreateConstant();

  return (
    <main className="flex flex-col gap-6">
      <h1 className="text-xl font-semibold">Create new constant</h1>

      <div className="mx-auto w-full max-w-[600px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormInput
              form={form}
              name="constant_name"
              label="Constant name"
              type="text"
              isLoading={isLoading}
            />
          </form>
        </Form>
      </div>
    </main>
  );
}
