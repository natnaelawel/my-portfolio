'use client'; // Error components must be Client Components

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="grid place-items-center min-h-screen">
      <div className="flex flex-col items-center">
        <h2 className="text-6xl text-center font-extrabold italic">
          Something went wrong!
        </h2>

        <span className="">
          Return
          <Link href="/" className="text-accent">
            {' '}
            Home
          </Link>
        </span>
      </div>
    </main>
  );
}
