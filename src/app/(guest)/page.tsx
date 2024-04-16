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
import useAuthHook from '@/hooks/AuthHook';
import Link from 'next/link';

export default function SignIn() {
  const { form, onSubmit, isLoading } = useAuthHook();

  return (
    <Card className="mx-auto mt-36 w-full max-w-lg">
      <CardHeader>
        <CardTitle className="text-center">Sign in</CardTitle>
      </CardHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormInput
              form={form}
              fieldName="email"
              label="Email"
              placeholder="Email"
              type="text"
              isLoading={isLoading}
            />

            <FormInput
              form={form}
              fieldName="password"
              label="Password"
              placeholder="Password"
              type="password"
              isLoading={isLoading}
            />
          </CardContent>

          <CardFooter className="flex flex-row justify-between">
            <Button variant="link" type="button">
              <Link href="/">Back to Home</Link>
            </Button>

            <Button type="submit">Sign in</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
