import { cn } from '@/utils';
import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Job Swipe - Admin',
  description: 'Job Swipe Admin',
  icons: '/favicon.ico',
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body
        className={cn(
          'relative flex min-h-screen flex-col overflow-x-hidden font-poppins antialiased',
          poppins.variable,
        )}
      >
        <>{children}</>
        <Toaster />
      </body>
    </html>
  );
}
