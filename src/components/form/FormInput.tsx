import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { InputHTMLAttributes } from 'react';

type FormInputProps = {
  form: any;
  name: string;
  label: string;
  isLoading: boolean;
  required: boolean;
  placeholder?: string;
  type: InputHTMLAttributes<HTMLInputElement>['type'];
};

export default function FormInput({
  form,
  name,
  label,
  isLoading,
  placeholder,
  required = false,
  type = 'button',
}: FormInputProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            <span>{label}</span>
            {required && <span className="ml-1 text-red-500">*</span>}
          </FormLabel>

          <FormControl>
            <Input
              type={type}
              disabled={isLoading}
              placeholder={placeholder}
              required={required}
              {...field}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
