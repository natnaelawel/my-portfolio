import './globals.css';
import { Metadata } from 'next';
import LocomotiveScrollComponent from '../components/common/LocomotiveScrollComponent';
import { Inter, Yeseva_One } from 'next/font/google';
export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

const YesevaOne = Yeseva_One({
  subsets: ['latin'],
  weight: ['400'],
});

const inter = Inter({
  subsets: ['latin-ext', 'latin'],
  weight: ['400'],
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${YesevaOne.className} ${inter.className}`}>
        <LocomotiveScrollComponent />
        {children}
      </body>
    </html>
  );
}
