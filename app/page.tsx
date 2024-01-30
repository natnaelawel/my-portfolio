import Navbar from '../components/Navbar/Navbar';
import SMSideElements from '../components/SM-SideElements';
import EmailSideElements from '../components/EmailSider';
import HeroComponent from '../components/Hero/Hero';
import AboutMe from '../components/AboutMe/AboutMe';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Loader from '../components/common/Loader';
import { Suspense } from 'react';
import OtherProjects from '../components/Projects/OtherProjects/OtherProjects';
import ContactUS from '../components/ContactUS/ContactUS';
import Footer from '../components/Footer/Footer';

import Particles from '../components/Particles';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Nathaniel Hussein | Front End Developer | Full-stack Developer - Freelancer',
  description:
    'Hire Professional Freelancer &amp; Full-stack Develope. Building animations and interactive experiences, hi-end solutions, website maintenance &amp; security',
  openGraph: {
    title: 'Nathaniel Hussein',
    description: `Hire Professional Freelancer &amp; Full-stack Develope. Building animations and interactive experiences, hi-end solutions, website maintenance &amp; security`,
    images: ['https://nathaniel-hussein.vercel.app/images/me.jpg'],
    type: 'website',
    url: 'https://nathaniel-hussein.vercel.app/',
    locale: 'en_US',
    siteName: 'Nathaniel Hussein',
  },
  twitter: {
    creatorId: '@NatnaelAwel',
    site: '@NatnaelAwel',
    card: 'summary_large_image',
    creator: '@NatnaelAwel',
    title: 'Nathaniel Hussein',
    description: `Hire Professional Freelancer &amp; Full-stack Develope. Building animations and interactive experiences, hi-end solutions, website maintenance &amp; security`,
    images: ['https://nathaniel-hussein.vercel.app/images/me.jpg'],
  },

  icons: [
    {
      url: 'https://nathaniel-hussein.vercel.app/images/letter-n-2-logo.svg',
      type: 'image/jpeg',
      sizes: '192x192',
    },
  ],
};

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="w-full h-full min-h-screen" data-scroll-container>
        <Particles />
        <Navbar />
        <SMSideElements />
        <EmailSideElements />
        <main className="flex flex-col items-center w-full justify-center min-h-screen my-14 mt-20">
          <HeroComponent />
          <AboutMe />
          <Experience />
          <Projects />
          <OtherProjects />
          <ContactUS />
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}
