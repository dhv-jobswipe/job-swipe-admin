import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type FormComboboxProps = {
  form: any;
  name: string;
  selectList: any[];
  selectKey: string;
  showKey: string;
  required: boolean;
};

export default function FormCombobox({
  form,
  name,
  selectList,
  selectKey,
  showKey,
  required = false,
}: FormComboboxProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex w-full flex-col">
          <FormLabel>
            <span>Type</span>
            {required && <span className="ml-1 text-red-500">*</span>}
          </FormLabel>

          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            required={required}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a type" />
              </SelectTrigger>
            </FormControl>

            <SelectContent>
              {selectList.map((item) => (
                <SelectItem key={item[selectKey]} value={item[selectKey]}>
                  {String(item[showKey])
                    .split('_')
                    .join(' ')
                    .toLocaleUpperCase()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
