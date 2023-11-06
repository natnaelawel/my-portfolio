import Head from 'next/head';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar/Navbar';
import SMSideElements from '../components/SM-SideElements';
import EmailSideElements from '../components/EmailSider';
import HeroComponent from '../components/Hero/Hero';
import AboutMe from '../components/AboutMe/AboutMe';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import { useRouter } from 'next/router';
import Loader from '../components/common/Loader';
import { Suspense, useCallback, useEffect, useState } from 'react';
import OtherProjects from '../components/Projects/OtherProjects/OtherProjects';
import ContactUS from '../components/ContactUS/ContactUS';
import Footer from '../components/Footer/Footer';
import { motion } from 'framer-motion';
import SlideWrapper from '../components/common/SlideToRight';
const inter = Inter({ subsets: ['latin'] });
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Container } from 'react-dom';


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

  const particlesInit = async (main: any) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
};


const particlesLoaded: any = useCallback(async (container: Container | undefined) => {
  await console.log(container);
}, []);

  return (
    <Suspense fallback={<Loader />}>
      <Head>
        <title>
          Nathaniel Hussein | Front End Developer | Full-stack Developer -
          Freelancer
        </title>
      </Head>
      <div className="w-full h-full min-h-screen" data-scroll-container>
      <Particles  
        loaded={particlesLoaded}
        init={particlesInit} 
             options={{
              background: {
                  color: {
                      value: "#0F2341",
                  },
              },
              fpsLimit: 120,
              interactivity: {
                  events: {
                      onClick: {
                          enable: true,
                          mode: "push",
                      },
                      onHover: {
                          enable: true,
                          mode: "repulse",
                      },
                      resize: true,
                  },
                  modes: {
                      push: {
                          quantity: 4,
                      },
                      repulse: {
                          distance: 250,
                          duration: 0.9,
                      },
                  },
              },
              particles: {
                  color: {
                      value: "#ffffff",
                  },
                  links: {
                      color: "#cccccc",
                      distance: 150,
                      enable: true,
                      opacity: 0.05,
                      width: 1,
                  },
                  move: {
                      direction: "none",
                      enable: true,
                      outModes: {
                          default: "bounce",
                      },
                      random: false,
                      speed: 1,
                      straight: false,
                  },
                  number: {
                      density: {
                          enable: true,
                          area: 800,
                      },
                      value: 80,
                  },
                  opacity: {
                      value: 0.5,
                  },
                  shape: {
                      type: "circle",
                  },
                  size: {
                      value: { min: 1, max: 5 },
                  },
              },
              detectRetina: true,
          }}
          
          />
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
