import React from 'react';
import CustomSVGIcon from '../../../utils/getSVG';

type Props = {};

const OtherProjects = (props: Props) => {
  const otherProjects = [
    {
      id: '1',
      title: ' Integrating Algolia Search with WordPress Multisite',
      site_link: '',
      repo_link: '',
      descriptions: [
        'Building a custom multisite compatible WordPress plugin to build global search with Algolia',
      ],
      techs: ['ReactJS', 'NextJS', 'Nodejs', 'Git', 'MongoDB'],
    },
    {
      id: '2',
      title: ' Integrating Algolia Search with WordPress Multisite',
      site_link: '',
      repo_link: '',
      descriptions: [
        'Building a custom multisite compatible WordPress plugin to build global search with Algolia',
      ],
      techs: ['ReactJS', 'NextJS', 'Apollo Client', 'Git', 'SEO', 'Agile'],
    },
    {
      id: '3',
      title: ' Integrating Algolia Search with WordPress Multisite',
      site_link: '',
      repo_link: '',
      descriptions: [
        'Building a custom multisite compatible WordPress plugin to build global search with Algolia',
      ],
      techs: [
        'ReactJS',
        'NodeJS',
        'DynamoDB',
        'Git',
        'AWS lambda',
        'Serverless',
      ],
    },
    {
      id: '4',
      title: 'Zemastore (Final-year-project)',
      site_link: '',
      repo_link: '',
      descriptions: [
        'Built a tool to enhances artists’ revenue for their work and handles copyright issues.',
      ],
      techs: ['ReactJS', 'NodeJS', 'Flask', 'AES', 'Encryption', 'Git'],
    },
    {
      id: '5',
      title: 'Hakim Hub (Internship Project)',
      site_link: '',
      repo_link: '',
      descriptions: [
        'Designed, developed, and tested the backend and interact with mobile and web teams.',
      ],
      techs: ['ReactJS', 'NodeJS', 'Flask', 'AES', 'Encryption', 'Git'],
    },
  ];

  return (
    <section className="w-11/12 lg:w-3/4 px-4 flex flex-col items-center gap-y-2">
      <h2
        className="font-semibold text-lightest_slate text-2xl"
        style={{
          visibility: 'visible',
          opacity: 1,
          transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
          transition:
            'opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s',
        }}
      >
        Other Noteworthy Projects
      </h2>

      <a
        className="inline-link archive-link font-mono text-accent text-sm"
        href="/archive"
        data-sr-id="8"
        style={{
          visibility: 'visible',
          opacity: 1,
          transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
          transition:
            'opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s',
        }}
      >
        view the archive
      </a>

      <ul className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative my-2 lg:my-4">
        {otherProjects.map((project, index) => {
          return (
            <li
              key={project.id}
              className="projects__StyledProject-sc-1v1fime-1 relative hover:transform translate-x-5 cursor-pointer"
              style={{
                transition:
                  'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s',
                visibility: 'visible',
                opacity: 1,
                transform:
                  'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
              }}
              data-sr-id="9"
            >
              <div
                style={{
                  boxShadow: '0 10px 30px -15px var(--navy-shadow)',
                  borderRadius: 'var(--border-radius)',
                  transition: 'var(--transition)',
                }}
                className="project-inner flex flex-col items-start relative overflow-auto justify-center px-8 py-4 h-full bg-light_navy hover:-translate-y-4"
              >
                <header>
                  <div className="project-top flex justify-between items-center my-1 mb-4">
                    <div className="folder">
                      <a
                        href={project.repo_link}
                        className="external"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CustomSVGIcon
                          className="text-accent !w-8 !h-8"
                          name="folder"
                        />
                      </a>
                    </div>
                    <div className="project-links ">
                      <a
                        href={project.repo_link}
                        aria-label="External Link"
                        className="external"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CustomSVGIcon
                          name="external-link"
                          className="!w-6 !h-6"
                        />
                      </a>
                    </div>
                  </div>
                  <h3 className="project-title text-lightest_slate text-lg font-semibold leading-6 hover:text-accent hover:font-bold">
                    <a
                      href={project.site_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="project-description text-xs my-2">
                    {project.descriptions?.map((desc, index) => {
                      return <p key={desc}>{project.descriptions}</p>;
                    })}
                  </div>
                </header>
                <footer className="self-end">
                  <ul className="project-tech-list flex items-center font-mono !text-xs gap-x-3 my-5 flex-wrap">
                    {project.techs.map((tech, index) => {
                      return <li key={tech}>{tech}</li>;
                    })}
                  </ul>
                </footer>
              </div>
            </li>
          );
        })}
      </ul>
      <button className="email-link text-accent bg-transparent border border-accent px-4 py-3 leading-4 cursor-pointer hover:bg-accent/5">
        Show More
      </button>
    </section>
  );
};

export default OtherProjects;
