'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Skeleton } from '@/components/ui/skeleton';
import NextIcon from '@/icons/NextIcon';
import { useAuthStore } from '@/store/authStore';
import Constants from '@/utils/Constants';
import { deleteCookie } from 'cookies-next';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const { data } = useAuthStore();

  function handleSignOut() {
    deleteCookie(Constants.COOKIES.ACCESS_TOKEN);
    deleteCookie(Constants.COOKIES.REFRESH_TOKEN);
    router.push(Constants.PUBLIC_ROUTES[0]);
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-md">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center">
            <NextIcon />
            <span className="sr-only">Powered by NextJS</span>
          </div>

          <nav className="hidden gap-8 md:flex">
            {Constants.NAVBAR_LINK.map((link) => (
              <Link
                className="flex items-center text-sm font-medium transition-colors hover:underline"
                key={link.href}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="hover:cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />

                <AvatarFallback className="flex items-center justify-center">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="mr-2 w-52">
              {data.email ? (
                <DropdownMenuLabel>{data.email}</DropdownMenuLabel>
              ) : (
                <Skeleton className="h-8 w-full" />
              )}
              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuItem
                  className="hover:cursor-pointer"
                  onClick={handleSignOut}
                >
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
