import { ReactNode } from 'react';

type PrivateLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
}
