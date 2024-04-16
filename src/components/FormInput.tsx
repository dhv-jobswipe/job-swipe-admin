import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { InputHTMLAttributes } from 'react';
import { UseFormReturn } from 'react-hook-form';

type FormInputProps = {
  form: UseFormReturn<any, any, undefined>;
  fieldName: string;
  label: string;
  placeholder?: string;
  isLoading: boolean;
  type: InputHTMLAttributes<HTMLInputElement>['type'];
};

export default function FormInput({
  form,
  fieldName,
  label,
  placeholder,
  isLoading,
  type = 'button',
}: FormInputProps) {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type={type}
              disabled={isLoading}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
