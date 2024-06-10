'use client';

import Loading from '@/components/Loading';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import useMatchManagementHook from '@/container/match-management/MatchManagement.hook';
import { Undo2, Unplug } from 'lucide-react';
import moment from 'moment';

export default function MatchManagementContainer() {
  const {
    router,
    isLoading,
    tableHeaders,
    matches,
    selectedMatch,
    setSelectedMatch,
    unmatch,
  } = useMatchManagementHook();

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="mt-2 flex flex-col space-y-4">
      <div className="flex flex-row items-center justify-between">
        <h5 className="text-xl font-semibold">List of matches</h5>

        <div className="flex flex-row space-x-4">
          <Button
            size="icon"
            variant="outline"
            disabled={!selectedMatch}
            onClick={unmatch}
          >
            <Unplug />
          </Button>

          <Button size="icon" onClick={() => router.back()}>
            <Undo2 />
          </Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="!bg-pink-800">
              {tableHeaders.map((header, index) => (
                <TableHead key={index} className="text-white">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {matches.map((match, index) => (
              <TableRow key={match.id} className="!bg-white odd:!bg-pink-100">
                <TableCell>
                  <div className="flex flex-row items-center justify-start space-x-3">
                    <Checkbox
                      checked={selectedMatch === match}
                      onCheckedChange={(checked) => {
                        setSelectedMatch(checked ? match : null);
                      }}
                    />

                    <span>{(index + 1).toLocaleString()}</span>
                  </div>
                </TableCell>

                <TableCell>
                  <div className="flex flex-col space-y-1">
                    <span>{match.user.first_name}</span>
                    <span className="text-xs">{match.user.email}</span>
                  </div>
                </TableCell>

                <TableCell>
                  <div className="flex flex-col space-y-1">
                    <span>{match.company.company_name}</span>
                    <span className="text-xs">{match.company.email}</span>
                  </div>
                </TableCell>

                <TableCell>
                  {moment(match.updated_at).format('YYYY-MM-DD')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
