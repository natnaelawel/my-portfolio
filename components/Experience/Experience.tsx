import clsx from 'clsx';
import React, { useState } from 'react';
import styles from './experience.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Engineer',
      location: 'California, USA',
      company: 'A2SV',
      from: 'May 2018',
      to: 'Present',
      descriptions: [
        'Implemented full-stack applications across various platforms using the latest industry-adopted technologies and frameworks.',
        'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis Studio Developer @ Scout',
        'Used React JS and Next JS to develop solutions.',
      ],
    },
    {
      id: 2,
      title: 'Full-stack Developer',
      company: 'Tech 1 Factory LLC',
      location: 'Atlanta, Georgia, USA',
      from: 'May 2021',
      to: 'Present',
      descriptions: [
        'Implemented full-stack applications across various platforms using latest industry-adopted technologies and frameworks.',
        'Implemented 4+ front-end and back-end applications utilizing React.js, Node.js, TypeScript, and Serverless framework.',
        'implemented code following common security practices and development design patterns.',
        'Completed all phases of planning, developing, and debugging web applications and software accurately.',
        'built, tested, and deployed scalable, available, and modular software products.',
      ],
    },
    {
      id: 3,
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
      id: 4,
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
      className="w-3/5 px-10 my-5 py-5 jobs__StyledJobsSection-sc-59sdss-0 jdfosx "
      data-sr-id="2"
      style={{
        visibility: 'visible',
        opacity: 1,
        transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
        transition:
          'opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s',
      }}
    >
      <h2 className="numbered-heading flex my-2 py-5 relative font-semibold items-center text-2xl text-lightest_slate numbered-heading after:content-[''] after:block after:w-52 after:h-[0.5px] after:bg-lightest_navy after:mx-2 after:my-auto ">
        Where I’ve Worked
      </h2>
      <div className="inner flex min-h-max gap-x-14 gap-y-5 text-sm">
        <div
          role="tablist"
          aria-label="Job tabs"
          className="relative w-max flex flex-col"
        >
          {experiences.map((experience: any, index: number) => {
            return (
              <button
                onClick={() => setActiveExp(experience)}
                id={`tab-${experience.id}`}
                key={`tab-${experience.id}`}
                role="tab"
                aria-selected="true"
                aria-controls={`panel-${experience.id}`}
                className={clsx(
                  'text-sm text-start border-l-2 border-lightest_navy text-slate whitespace-nowrap flex items-center bg-transparent hover:text-accent hover:bg-accent/5 px-5 py-3',
                  activeExp.id === experience.id &&
                    '!text-accent !border-accent'
                )}
              >
                <span>{experience.company}</span>
              </button>
            );
          })}
          <div className="jobs__StyledHighlight-sc-59sdss-3 fLsUSJ"></div>
        </div>
        <div className="w-[600px] min-h-[450px]">
          <AnimatePresence mode="wait">
            {activeExp && (
              <motion.div
                id={`panel-${activeExp.id}`}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="my-1 font-semibold leading-5 text-xl ">
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
                <div>
                  <ul>
                    {activeExp.descriptions.map(
                      (desc: string, index: number) => (
                        <li
                          key={desc}
                          className="flex my-4 items-start justify-between before:my-1 relative before:content-['▹'] before:absolute before:text-accent before:text-xl before:leading-3 before:-ml-5"
                        >
                          {desc}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;