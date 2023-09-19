import clsx from 'clsx';
import React from 'react';
import styles from './aboutme.module.css';
import { motion } from 'framer-motion';
type Props = {};

const AboutMe = (props: Props) => {
  const frameworks = [
    'ReactJS',
    'NextJS',
    'NodeJS',
    'NestJS',
    'React Native',
    'VueJS',
    'Cypress',
    'Jest',
  ];

  const languages = [
    'JavaScript (ES6+)',
    'TypeScript',
    'Python',
    'Java',
    'PHP',
    'SQL (PostgreSQL, MySQL)',
    'NoSQL (MongoDB, DynamoDB)',
    'Dart',
    'C++',
    'Serverless',
  ];

  const otherTools = [
    'Git',
    'AWS',
    'Docker',
    'Agile',
    'Scrum',
    'Blockchain',
    'Web3',
    'Micro Services',
  ];

  return (
    <motion.section
      data-scroll-container
      id="about"
      className="w-11/12 lg:w-3/4 px-5 md:my-5 py-5 text-sm"
      data-sr-id="0"
      initial={{
        opacity: 0,
        x: -80,
        y: -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: 1.5,
      }}
    >
      <h2 className="flex my-3 font-bold text-2xl text-lightest_slate numbered-heading after:content-[''] after:block after:w-20 sm:after:w-52 after:h-[0.5px] after:bg-lightest_navy after:mx-2 after:my-auto ">
        About Me
      </h2>
      <div className="my-2 w-full flex flex-col justify-center items-start lg:flex-row gap-y-4 gap-x-6 lg:justify-between lg:items-start text-sm">
        <motion.div
          transition={{
            duration: 1.2,
            type: 'spring',
            damping: 20,
          }}
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          className=" my-2 w-full text-xs leading-5 lg:text-sm lg:w-3/5 lg:leading-5 "
        >
          <div>
            <p>
              Hello! My name is Nathaniel and I enjoy creating things that live
              on the internet. I am well-qualified Full Stack Developer familiar
              with a wide range of programming utilities and languages. Over the
              last 3+ years, I have designed & developed a wide range of
              websites for startup companies and large businesses.
            </p>
            <p>
              Here are a few technologies I&apos;ve been working with recently:
            </p>
          </div>
          <div className="skills !text-xs">
            <div className="flex flex-col my-2 !text-xs">
              <h2 className="font-semibold text-lighter_slate font-mono">
                Languages:
              </h2>
              <ul className="w-full skills-list flex flex-wrap gap-x-4 lg:gap-x-10  pl-10 text-sm tracking-wide leading-5">
                {languages.map((tech, index) => {
                  return (
                    <li
                      key={`${tech}-1`}
                      className="flex font-mono text-[13px] lg:text-sm tracking-tighter lg:tracking-normal items-center text-xs justify-between before:my-1 relative before:content-['▹'] before:absolute before:items-center before:text-accent before:text-xl before:leading-3 before:-ml-4 "
                    >
                      {tech}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col my-2">
              <h2 className="font-semibold text-lighter_slate font-mono">
                Frameworks:
              </h2>
              <ul className="w-full skills-list flex flex-wrap gap-x-4 lg:gap-x-10   pl-10 tracking-wide leading-5 text-xs">
                {frameworks.map((tech, index) => {
                  return (
                    <li
                      key={`${tech}-1`}
                      className="flex font-mono text-[13px] lg:text-sm tracking-tighter lg:tracking-normal items-center justify-between before:my-2 relative before:content-['▹'] before:absolute before:items-center before:text-accent before:text-xl before:leading-3 before:-ml-4 "
                    >
                      {tech}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col my-2">
              <h2 className="font-semibold text-lighter_slate font-mono">
                Other Tools:
              </h2>
              <ul className="w-full skills-list flex flex-wrap gap-x-4 lg:gap-x-10   pl-10 tracking-wide leading-5 text-xs">
                {otherTools.map((tech, index) => {
                  return (
                    <li
                      key={`${tech}-1`}
                      className="flex font-mono text-[13px] lg:text-sm tracking-tighter lg:tracking-normal items-center justify-between before:my-2 relative before:content-['▹'] before:absolute before:items-center before:text-accent before:text-xl before:leading-3 before:-ml-4 "
                    >
                      {tech}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div
          transition={{
            duration: 1.6,
          }}
          initial={{
            // x: '1000px',
            opacity: 0,
          }}
          whileInView={{
            // x: '10px',
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          // animate={{
          //   x: '10px',
          // }}
          className="w-11/12 lg:w-2/5 relative"
        >
          <div
            style={{
              boxShadow: '0 10px 30px -15px var(--navy-shadow)',
              transition: 'var(--transition)',
              maxWidth: '300px',
            }}
            className={clsx(
              // "relative block wrapper rounded-xl before:bg-navy after:content=[''] before:mix-blend-screen  before:w-full before:h-full after:absolute after:w-full after:h-full after:left-10 after:hover:left-8 after:top-5 after:hover:top-3  after:border-2 after:border-accent ease-in-out transition-all duration-1000 after:rounded-2xl after:z-10 ",
              styles.wrapper
            )}
          >
            <a
              href="https://github.com/natnaelawel"
              target="_blank"
              rel="noreferrer"
              className={clsx('relative', styles.wrapper__img)}
            >
              <div
                className="absolute -z-20 top-0 left-0 "
                style={{ maxWidth: '300px', display: 'block' }}
              >
                <img
                  alt=""
                  role="presentation"
                  aria-hidden="true"
                  src="data:image/svg+xml;charset=utf-8,%3Csvg height='450' width='450' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                  style={{
                    maxWidth: '100%',
                    display: 'block',
                    position: 'static',
                  }}
                />
              </div>
              <div
                aria-hidden="true"
                data-placeholder-image=""
                style={{
                  opacity: 0,
                  transition: 'opacity 500ms linear 0s',
                  backgroundColor: 'rgb(232, 232, 232)',
                  position: 'absolute',
                  inset: '0px',
                  objectFit: 'cover',
                }}
              ></div>
              <img
                className=""
                width="450px"
                height="450px"
                sizes="(min-width: 400px) 450px, 100vw"
                decoding="async"
                src="/images/me.jpg"
                alt="Headshot"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
