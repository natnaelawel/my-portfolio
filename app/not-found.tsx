import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="grid place-items-center min-h-screen">
      <div className="flex flex-col items-center">
        <h2 className="text-6xl text-center font-extrabold italic">
          Not Found
        </h2>
        <p>Could not find requested resource</p>
        <span>
          <span className="text-accent">Error Code: </span>
          <span className="text-accent">404</span>
        </span>
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
