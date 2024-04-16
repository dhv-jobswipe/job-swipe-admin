import Navbar from '@/components/Navbar';
import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';
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
    <html lang="en">
      <body
        className={`relative flex min-h-screen flex-col overflow-x-hidden antialiased ${poppins.variable} font-poppins`}
      >
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
