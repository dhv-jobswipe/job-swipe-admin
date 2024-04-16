import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import NextIcon from '@/icons/NextIcon';
import Constants from '@/utils/Constants';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';

type NavbarProps = {
  isAuthenticated: boolean;
};

export default function Navbar({ isAuthenticated }: NavbarProps) {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
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

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="hover:cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="avatar"
                  />

                  <AvatarFallback>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="mr-2 w-52">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem className="hover:cursor-pointer">
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/">
              <Button size="sm">Sign in</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
