import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar/Navbar';
import SMSideElements from '../components/SM-SideElements';
import EmailSideElements from '../components/EmailSider';
import HeroComponent from '../components/Hero/Hero';
import AboutMe from '../components/AboutMe/AboutMe';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import { useRouter } from 'next/router';
import Loader from '../components/common/Loader';
import { Suspense, useEffect, useState } from 'react';
import OtherProjects from '../components/Projects/OtherProjects/OtherProjects';
import ContactUS from '../components/ContactUS/ContactUS';
import Footer from '../components/Footer/Footer';
import { motion } from 'framer-motion';
import SlideWrapper from '../components/common/SlideToRight';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!router.isFallback || !router.isReady) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [router.isFallback, router.isReady]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Head>
          <title>Nathaniel Hussein</title>
          <meta name="description" content="Nathaniel Hussein's Portfolio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="w-full h-full">
          <Navbar />
          <SMSideElements />
          <EmailSideElements />
          <main className="flex flex-col items-center justify-center min-h-screen my-10">
            <HeroComponent />
            <SlideWrapper from="left">
              <AboutMe />
            </SlideWrapper>
            <SlideWrapper from="right">
              <Experience />
            </SlideWrapper>
            <Projects />
            <OtherProjects />
            <ContactUS />
          </main>
          <Footer />
        </div>
      </Suspense>
    </>
  );
}

{
  /* <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main> */
}
