// git commit -m "PBL-620 all constants"
// git commit -m "PBL-623 delete constant"

'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import useConstantManagementHook from '@/container/constant-management/ConstantManagement.hook';
import { ChevronDown, Minus, Plus } from 'lucide-react';
import Link from 'next/link';

export default function ConstantManagementContainer() {
  const {
    tableHeaders,
    constantPrefixes,
    constantsByPrefix,
    selectedPrefix,
    selectedConstants,
    setSelectedConstants,
    setSelectedPrefix,
    createConstantPath,
    deleteConstants,
  } = useConstantManagementHook();

  return (
    <main className="flex flex-col gap-4">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-xl font-semibold">Constants in System</h1>

        <div className="flex flex-row items-center gap-4">
          <div className="flex flex-row gap-4">
            <Button size={'icon'} variant={'constructive'}>
              <Link href={createConstantPath()}>
                <Plus />
              </Link>
            </Button>

            <Button
              size={'icon'}
              variant={'destructive'}
              disabled={selectedConstants.length === 0}
              onClick={deleteConstants}
            >
              <Minus />
            </Button>
          </div>

          <div className="flex flex-row items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto capitalize">
                  {selectedPrefix ? (
                    <span>
                      {constantPrefixes
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
                  {constantPrefixes.map((item) => (
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
        </div>
      </div>

      {selectedPrefix && (
        <div className="overflow-hidden rounded-lg">
          <Table className="w-full">
            <TableHeader>
              <TableRow className="!bg-pink-800">
                <TableHead></TableHead>

                {tableHeaders.map((header, id) => {
                  return (
                    <TableHead key={id} className="truncate text-white">
                      {header}
                    </TableHead>
                  );
                })}
              </TableRow>
            </TableHeader>

            <TableBody>
              {constantsByPrefix.map((constant, idx) => {
                return (
                  <TableRow key={idx} className="!bg-white odd:!bg-pink-100">
                    <TableCell className="h-14">
                      <Checkbox
                        checked={selectedConstants.includes(
                          constant.constant_id,
                        )}
                        onCheckedChange={(checked) => {
                          if (!checked) {
                            setSelectedConstants(
                              selectedConstants.filter(
                                (item) => item !== constant.constant_id,
                              ),
                            );
                          } else {
                            setSelectedConstants([
                              ...selectedConstants,
                              constant.constant_id,
                            ]);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell className="h-14 w-[10%]">
                      {constant.constant_type}
                    </TableCell>
                    <TableCell className="h-14 w-[45%]">
                      {constant.constant_name}
                    </TableCell>
                    <TableCell className="h-14 w-full">
                      {constant.note ? (
                        <pre className="font-sans text-xs">
                          {JSON.stringify(constant.note, null, 2)}
                        </pre>
                      ) : (
                        ''
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      )}
    </main>
  );
}
