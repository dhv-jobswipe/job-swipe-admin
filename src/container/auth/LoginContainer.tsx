'use client';

import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import useLoginHook from '@/container/auth/Login.hook';

export default function LoginContainer() {
  const { form, isLoading, onSubmit } = useLoginHook();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="mx-auto min-h-fit w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Sign in</CardTitle>
        </CardHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              <FormInput
                form={form}
                name="email"
                label="Email"
                type="text"
                placeholder="Email"
                isLoading={isLoading}
              />

              <FormInput
                form={form}
                name="password"
                label="Password"
                type="password"
                placeholder="Password"
                isLoading={isLoading}
              />
            </CardContent>

            <CardFooter className="flex items-center justify-end">
              <Button type="submit" disabled={isLoading}>
                Sign in
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
