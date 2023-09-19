import clsx from 'clsx';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Engineer',
      location: 'Addis Ababa, Ethiopia',
      company: 'Alphabet Trading',
      from: 'Jan 2023',
      to: 'Present',
      descriptions: [
        'Led development of 3+ successful websites, utilizing HTML, CSS, JavaScript, React, NextJS, Node.js, NestJS, GraphQL and more.',
        'Innovated solutions, embraced Agile methodologies, and prioritized rigorous QA to consistently deliver reliable, client-satisfying results.',
        'Developed and implemented new procedures and policies to improve the efficiency of the team, like a new code review process and Jira workflow.',
      ],
    },
    {
      id: 2,
      title: 'Software Engineer',
      location: 'California, USA',
      company: 'Eskalate LLC',
      from: 'June 2022',
      to: 'April 2023',
      descriptions: [
        'Responsible for developing a responsive web app for A2SV portal based on ReactJS, NextJS, Apollo Client, GraphQL',
        'Worked on optimizing the website pages with SEO best practice in order to make them as optimized as possible, and attained a top ranking on Google.',
        'Working in the agile/scrum development environment with frequently changing requirements and actively participating in scrum meetings and reviews. applications and software accurately.',
      ],
    },
    {
      id: 3,
      title: 'Full-stack Developer',
      company: 'Tech 1 Factory LLC',
      location: 'Atlanta, Georgia, USA',
      from: 'Mar 2021',
      to: 'Jun 2022',
      descriptions: [
        'Implemented full-stack applications across various platforms using latest industry-adopted technologies and frameworks.',
        'Implemented 4+ front-end and back-end applications utilizing React.js, Node.js, TypeScript, and Serverless framework.',
        'implemented code following common security practices and development design patterns.',
        'Completed all phases of planning, developing, and debugging web applications and software accurately.',
        'built, tested, and deployed scalable, available, and modular software products.',
      ],
    },
    {
      id: 4,
      title: 'Full-stack Developer',
      company: 'Gebeya Inc.',
      location: 'Addis Ababa, Ethiopia',
      from: 'April 2021',
      to: 'Present',
      descriptions: [
        'Designed and developed efficient and maintainable software according to business objectives and needs of various clients.',
        'Ensure that applications are secure and that they can interact with multiple APIs and databases.',
        'Used React js, Node js, SQL to develop app-solutions.',
      ],
    },
    {
      id: 5,
      title: 'Freelancing',
      company: 'Freelancing: (Upwork, Freelancer, etc)',
      location: '',
      from: 'Jun 2021',
      to: 'Present',
      descriptions: [
        'Built RESTful APIs that served data to the JavaScript front-end based on dynamically chosen user inputs that handled over 500,000 concurrent users.',
        'Designed and coded 1,000+ unit and integration tests using Jest and Proficient methodology.',
        'Responsible for API design and development of RESTful Services for the enterprise products in the business.',
        'Collaborate with the app development team, including the project manager, developers, and quality assurance specialist, to identify problems, testing methods, and best practices.',
      ],
    },
    {
      id: 6,
      title: 'Backend Developer Intern',
      company: 'Eskalate LLC',
      location: 'California, USA',
      from: 'Jun 2021',
      to: 'Dec 2021',
      descriptions: [
        'Built RESTful APIs that served data to the JavaScript front-end based on dynamically chosen user inputs that handled over 500,000 concurrent users.',
        'Designed and coded 1,000+ unit and integration tests using Jest and Proficient methodology.',
        'Responsible for API design and development of RESTful Services for the enterprise products in the business.',
        'Collaborate with the app development team, including the project manager, developers, and quality assurance specialist, to identify problems, testing methods, and best practices.',
      ],
    },
  ];

  const [activeExp, setActiveExp] = useState(experiences[0]);

  return (
    <section
      id="experience"
      className="w-11/12 lg:w-3/4 px-4 lg:px-5 my-5 py-5  "
      data-sr-id="2"
      style={{
        visibility: 'visible',
        opacity: 1,
        transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
        transition:
          'opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s',
      }}
    >
      <h2 className=" flex my-2 py-5 relative font-semibold items-center text-base md:text-2xl text-lightest_slate numbered-heading after:content-[''] after:block after:w-14 sm:after:w-52 after:h-[0.5px] after:bg-lightest_navy after:mx-2 after:my-auto ">
        Where I&apos;ve Worked
      </h2>
      <div className=" flex flex-col lg:flex-row min-h-max gap-x-5 gap-y-5 text-sm justify-start">
        <motion.div
          role="tablist"
          aria-label="Job tabs"
          className=" relative flex flex-row lg:flex-col items-center md:items-start justify-start w-full lg:w-max h-10 md:h-max overscroll-x-auto !text-xs py-2 md:py-5 overflow-x-auto no-scrollbar"
          initial={{
            x: '-500px',
          }}
          animate={{
            x: '0px',
          }}
          transition={{
            duration: 0.6,
          }}
        >
          {experiences.map((experience: any, index: number) => {
            return (
              <button
                onClick={() => setActiveExp(experience)}
                id={`tab-${experience.id}-${index}`}
                key={`tab-${experience.id}-${index}`}
                role="tab"
                aria-selected="true"
                aria-controls={`panel-${experience.id}`}
                className={clsx(
                  'w-full min-w-max text-start border-b-2 lg:border-b-0 h-10 text-[12px] lg:text-sm lg:border-l-2 border-lightest_navy text-slate  flex items-center bg-transparent hover:text-accent hover:bg-accent/5 px-2 lg:px-5 py-1 lg:py-3',
                  activeExp.id === experience.id &&
                    '!text-accent !border-accent'
                )}
              >
                <span className="">{experience.company}</span>
              </button>
            );
          })}
          <div className=""></div>
        </motion.div>
        <motion.div
          transition={{
            duration: 0.6,
          }}
          initial={{
            x: '500px',
          }}
          animate={{
            x: '0px',
          }}
          className="w-full max-w-[700px]  min-h-[400px] py-5 p-auto text-[15px] flex-wrap md:px-4"
        >
          <AnimatePresence mode="wait">
            {experiences.map((exp, index) => {
              return activeExp.id === exp.id ? (
                <motion.div
                  key={`panel-${exp.id}-${index}`}
                  id={`panel-${exp.id}-${index}`}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="my-1 font-semibold leading-5 text-base md:text-xl ">
                    <span>{activeExp.title}</span>
                    <span className="company transition text-accent relative">
                      &nbsp;@&nbsp;
                      <a
                        href="https://www.upstatement.com/"
                        className="inline-link transition text-accent relative"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {activeExp.company}
                      </a>
                    </span>
                  </h3>
                  <p className="range">
                    {activeExp.from} - {activeExp.to}
                  </p>
                  <div className="text-xs ">
                    <ul className="flex flex-col flex-wrap max-w-full px-5">
                      {activeExp.descriptions.map(
                        (desc: string, index: number) => (
                          <li
                            key={desc + index}
                            className="text-justify sm:text-auto flex my-1 items-start justify-between before:my-1 relative before:content-['▹'] before:absolute before:text-accent before:text-xl before:leading-3 before:-ml-5"
                          >
                            {desc}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </motion.div>
              ) : (
                <></>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
