'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { TableHeader, TableRow } from '@/components/ui/table';
import useConstantManagementHook from '@/container/constant-management/ConstantManagement.hook';
import { ChevronDown, Table } from 'lucide-react';

export default function ConstantManagementContainer() {
  const { prefixConstants, selectedPrefix, setSelectedPrefix } =
    useConstantManagementHook();

  return (
    <main>
      <h1 className="text-xl font-semibold">Constants in System</h1>

      <div className="flex flex-row items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto capitalize">
              {selectedPrefix ? (
                <span>
                  {prefixConstants
                    .find((item) => item.value === selectedPrefix)
                    ?.prefix.split('_')
                    .join(' ')}
                </span>
              ) : (
                <span>Type</span>
              )}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuRadioGroup
              value={selectedPrefix}
              onValueChange={setSelectedPrefix}
            >
              {prefixConstants.map((item) => (
                <DropdownMenuRadioItem
                  key={item.value}
                  value={item.value}
                  className="capitalize"
                >
                  {item.prefix.split('_').join(' ')}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="!bg-pink-800">{}</TableRow>
        </TableHeader>
      </Table>
    </main>
  );
}
