// git commit -m "PBL-621 add constant"

'use client';

import FormCombobox from '@/components/form/FormCombobox';
import FormInput from '@/components/form/FormInput';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import useCreateConstant from '@/container/create-constant/CreateConstant.hook';
import Constants from '@/utils/Constants';

export default function CreateConstantContainer() {
  const { form, isLoading, constantPrefixes, onSubmit } = useCreateConstant();

  return (
    <main className="flex flex-col gap-6">
      <h1 className="text-xl font-semibold">Create new constant</h1>

      <div className="mx-auto w-full max-w-[600px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormCombobox
              form={form}
              name="constant_prefix"
              selectList={constantPrefixes}
              selectKey="value"
              showKey="prefix"
              required={true}
            />

            <FormInput
              form={form}
              name="constant_name"
              label="Name"
              type="text"
              required={true}
              isLoading={isLoading}
            />

            {form.watch('constant_prefix') === Constants.PREFIX.LANGUAGE ? (
              <div>a</div>
            ) : (
              <FormInput
                form={form}
                name={'note'}
                label={'Note'}
                type="text"
                required={false}
                isLoading={isLoading}
              />
            )}

            <div className="flex items-center justify-end">
              <Button type="submit" disabled={isLoading}>
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
}
