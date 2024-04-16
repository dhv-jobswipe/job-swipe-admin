import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-y-4">
        <h1 className="text-2xl">404 | Not found</h1>
        <Link href="/" className="underline">
          Back to home
        </Link>
      </div>
    </main>
  );
}
