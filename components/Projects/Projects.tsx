import React from 'react';
import CustomSVGIcon from '../../utils/getSVG';
import styles from './projects.module.css';
import clsx from 'clsx';
import SlideWrapper from '../common/SlideToRight';
type Props = {};

const Projects = (props: Props) => {
  const projects = [
    {
      id: '1',
    },
    {
      id: '2',
    },
    {
      id: '3',
    },
  ];

  return (
    <section
      id="jobs"
      className="w-3/4 px-10 my-10 py-12 jobs__StyledJobsSection-sc-59sdss-0 jdfosx "
    >
      <h2 className="numbered-heading flex my-2 py-5 relative font-semibold items-center text-2xl text-lightest_slate numbered-heading after:content-[''] after:block after:w-52 after:h-[0.5px] after:bg-lightest_navy after:mx-2 after:my-auto ">
        Some Things I&apos;ve Built
      </h2>
      <ul className="featured__StyledProjectsGrid-ywnbqt-0 dnNJYD flex flex-col gap-y-24 text-sm">
        {projects.map((project, index) => {
          return index % 2 === 0 ? (
            <SlideWrapper key={project.id} from="right">
              <li
                key={project.id}
                className="group relative opacity-100 visible grid gap-3 grid-cols-12 items-center"
                data-sr-id="4"
                style={{
                  transform:
                    'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
                  transition:
                    'opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s',
                }}
              >
                <div
                  className="project-image z-10 relative w-[600px] "
                  style={{
                    boxShadow: '0 10px 30px -15px var(--navy-shadow)',
                    transition: 'var(--transition)',
                    gridColumn: '1/8',
                    gridArea: '1/ 1 / -1 / 7',
                  }}
                >
                  <a
                    className={clsx(
                      styles.project_image__a,
                      'w-full !h-full relative'
                    )}
                    style={{
                      backgroundColor: 'var(--green)',
                      borderRadius: 'var(--border-radius)',
                      verticalAlign: 'middle',
                    }}
                    href="https://halcyon-theme.netlify.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div
                      style={{
                        boxShadow: '0 10px 30px -15px var(--navy-shadow)',
                        transition: 'var(--transition)',
                      }}
                      className={clsx(styles.wrapper)}
                    >
                      <div className={clsx('relative', styles.wrapper__img)}>
                        <div className="absolute z-20 top-0 left-0 ">
                          <img
                            alt=""
                            role="presentation"
                            aria-hidden="true"
                            src="data:image/svg+xml;charset=utf-8,%3Csvg height='450' width='450' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                            style={{
                              maxWidth: '100%',
                              height: '100%',
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
                          className="h-full w-full object-cover"
                          decoding="async"
                          src="/images/projects/mintplex-1.png"
                          alt="Headshot"
                        />
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="project-content relative gap-y-3 flex flex-col items-end text-right"
                  style={{
                    gridArea: '1/6/-1/-1',
                  }}
                >
                  <p className="project-overline  text-accent text-sm font-mono">
                    Featured Project
                  </p>
                  <h3 className="project-title text-lightest_slate font-semibold my-3 hover:text-accent text-2xl hover:font-bold">
                    <a
                      href="https://halcyon-theme.netlify.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Halcyon Theme
                    </a>
                  </h3>
                  <div
                    className="project-description relative z-20 rounded-lg"
                    style={{
                      boxShadow: '0 10px 30px -15px var(--navy-shadow)',
                      transition: 'var(--transition)',
                      position: 'relative',
                      zIndex: 20,
                      padding: '25px',
                      borderRadius: 'var(--border-radius)',
                      backgroundColor: 'var(--light-navy)',
                      color: 'var(--light-slate)',
                      fontSize: 'var(--fz-lg)',
                    }}
                  >
                    <p>
                      A minimal, dark blue theme for VS Code, Sublime Text,
                      Atom, iTerm, and more. Available on{' '}
                      <a
                        className="text-accent"
                        href="https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visual Studio Marketplace
                      </a>
                      ,{' '}
                      <a
                        className="text-accent"
                        href="https://packagecontrol.io/packages/Halcyon%20Theme"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Package Control
                      </a>
                      ,{' '}
                      <a
                        href="https://atom.io/themes/halcyon-syntax"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Atom Package Manager
                      </a>
                      , and{' '}
                      <a
                        href="https://www.npmjs.com/package/hyper-halcyon-theme"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        npm
                      </a>
                      .
                    </p>
                  </div>
                  <ul className="project-tech-list my-5 flex gap-x-2 tracking-tighter text-xs max-w-md self-end text-right flex-wrap justify-end relative mx-2 z-20 font-mono">
                    <li className="mx-1 text-slate whitespace-nowrap">
                      VS Code
                    </li>
                    <li className="mx-1 text-slate whitespace-nowrap">
                      {' '}
                      Sublime Text{' '}
                    </li>
                    <li className="mx-1 text-slate whitespace-nowrap">Atom</li>
                    <li className="mx-1 text-slate whitespace-nowrap">
                      iTerm2
                    </li>
                    <li className="mx-1 text-slate whitespace-nowrap">Hyper</li>
                  </ul>
                  <div className=" project-links text-lightest_slate my-3 flex justify-end items-center gap-x-2">
                    <a
                      href="https://github.com/bchiang7/halcyon-site"
                      aria-label="GitHub Link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <CustomSVGIcon className="" name="github" />
                    </a>
                    <a
                      href="https://halcyon-theme.netlify.com/"
                      aria-label="External Link"
                      className="external"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <CustomSVGIcon className="" name="external-link" />
                    </a>
                  </div>
                </div>
              </li>
            </SlideWrapper>
          ) : (
            <SlideWrapper key={project.id} from="left">
              <li
                className="group relative opacity-100 visible grid gap-3 grid-cols-12 items-center"
                data-sr-id="4"
                style={{
                  transform:
                    'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
                  transition:
                    'opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s',
                }}
              >
                <div
                  className="project-content relative gap-y-3 grid-col-[7/-1] group-[:nth-of-type(2n+1)_&]:[grid-column: 5 / -1] "
                  style={{
                    gridArea: '1/1/-1/ 7',
                  }}
                >
                  <p className="project-overline  text-accent text-sm font-mono">
                    Featured Project
                  </p>
                  <h3 className="project-title text-lightest_slate font-semibold my-3 hover:text-accent text-2xl hover:font-bold">
                    <a
                      href="https://halcyon-theme.netlify.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Halcyon Theme
                    </a>
                  </h3>
                  <div
                    className="project-description relative z-20 rounded-lg"
                    style={{
                      boxShadow: '0 10px 30px -15px var(--navy-shadow)',
                      transition: 'var(--transition)',
                      position: 'relative',
                      zIndex: 20,
                      padding: '25px',
                      borderRadius: 'var(--border-radius)',
                      backgroundColor: 'var(--light-navy)',
                      color: 'var(--light-slate)',
                      fontSize: 'var(--fz-lg)',
                    }}
                  >
                    <p>
                      A minimal, dark blue theme for VS Code, Sublime Text,
                      Atom, iTerm, and more. Available on{' '}
                      <a
                        href="https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visual Studio Marketplace
                      </a>
                      ,{' '}
                      <a
                        href="https://packagecontrol.io/packages/Halcyon%20Theme"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Package Control
                      </a>
                      ,{' '}
                      <a
                        href="https://atom.io/themes/halcyon-syntax"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Atom Package Manager
                      </a>
                      , and{' '}
                      <a
                        href="https://www.npmjs.com/package/hyper-halcyon-theme"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        npm
                      </a>
                      .
                    </p>
                  </div>
                  <ul className="project-tech-list my-5 flex gap-x-3 tracking-tighter text-sm flex-wrap relative mx-2 z-20 font-mono">
                    <li className="mx-1 text-slate whitespace-nowrap">
                      VS Code
                    </li>
                    <li className="mx-1 text-slate whitespace-nowrap">
                      Sublime Text
                    </li>
                    <li className="mx-1 text-slate whitespace-nowrap">Atom</li>
                    <li className="mx-1 text-slate whitespace-nowrap">
                      iTerm2
                    </li>
                    <li className="mx-1 text-slate whitespace-nowrap">Hyper</li>
                  </ul>
                  <div className="project-links text-lightest_slate my-3 flex items-center gap-x-2">
                    <a
                      href="https://github.com/bchiang7/halcyon-site"
                      aria-label="GitHub Link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <CustomSVGIcon className="" name="github" />
                    </a>
                    <a
                      href="https://halcyon-theme.netlify.com/"
                      aria-label="External Link"
                      className="external"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <CustomSVGIcon className="" name="external-link" />
                    </a>
                  </div>
                </div>
                <div
                  className="project-image z-10 relative "
                  style={{
                    boxShadow: '0 10px 30px -15px var(--navy-shadow)',
                    transition: 'var(--transition)',
                    gridArea: '1/6/-1/-1',
                  }}
                >
                  <a
                    className={clsx(styles.project_image__a)}
                    href="https://halcyon-theme.netlify.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div
                      style={{
                        boxShadow: '0 10px 30px -15px var(--navy-shadow)',
                        transition: 'var(--transition)',
                      }}
                      className={clsx(styles.wrapper)}
                    >
                      <div className={clsx('relative', styles.wrapper__img)}>
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
                          className="max-w-full block static"
                          // width="450px"
                          // height="450px"
                          decoding="async"
                          src="/images/projects/mintplex-1.png"
                          alt="Headshot"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </li>
            </SlideWrapper>
          );
        })}

        {/* <li className="featured__StyledProject-ywnbqt-1 eeeRej" data-sr-id="5" style={{
                    visibility: "visible",
                    opacity: 1,
                    transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                    transition: "opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s"
                }}>
                    <div className="project-content">
                        <p className="project-overline">Featured Project</p>
                        <h3 className="project-title">
                            <a href="https://spotify-profile.herokuapp.com/" rel="noopener noreferrer" target="_blank">Spotify Profile
                            </a>
                        </h3>
                        <div className="project-description">
                            <p>A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
                            </p>
                        </div>
                        <ul className="project-tech-list">
                            <li>React</li>
                            <li>Styled Components</li>
                            <li>Express</li>
                            <li>Spotify API</li>
                            <li>Heroku</li>
                        </ul>
                        <div className="project-links">
                            <a href="https://github.com/bchiang7/spotify-profile" aria-label="GitHub Link" rel="noopener noreferrer" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title>
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </a>
                            <a href="https://spotify-profile.herokuapp.com/" aria-label="External Link" className="external" rel="noopener noreferrer" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="project-image">
                        <a href="https://spotify-profile.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                            <div data-gatsby-image-wrapper="" className="gatsby-image-wrapper gatsby-image-wrapper-constrained img">
                                <div className='max-w-[700px] block' >
                                    <img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height='438' width='700' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E" />
                                </div>
                                <img aria-hidden="true" data-placeholder-image="" decoding="async"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAABcElEQVQoz32Q0U7bQBBF/RogjuOynpmdXW/W2E4cEwEhjgmymqpq+tg8tEWq2opf4hf6p5VjZJBjuE+r2b177h3HtQEKQMKOCOvxOb4nZ4gfMOhxngOUEX+NWCHAW+aTwSkRdZxANAHxb796+v35nkGQJOoze57fgxUi8Nxv5Wb/4xeTGo896MM7TAz4ckFEQoiiKL7sdutqu6k+fdxuq6oyxgRBt54zcr3OCABms9myWK2L1WKRXy+vy81dqMNjuOMemRGxhjABIisOCAQEcIQ9kEc95nqFAFEUZVkmpaSDeszucNSmPc7fDNtD56UzPHOllNNpMjuIiACAmefzubWWiOIkzrIsTdPGppTK8zwM6xU4g8GJ1ubqqkySxFrbfq+YASCJ401RXsQXYRi2jZRSzPzcmVlf5kuttZTydeyx79/eLB++/zTGWGujg5RSANCsoO5MRFpze9ESfH+8KtZ//j5OJqZJnqapMQYRG/J/k6JW26WIe1kAAAAASUVORK5CYII=" alt="" className='opacity-0 transition-opacity-[500ms linear 0s] object-cover' />
                            </div>
                        </a>
                    </div>
                </li > */}

        {/* <li className="featured__StyledProject-ywnbqt-1 eeeRej" data-sr-id="6" style={{
                    visibility: "visible",
                    opacity: 1,
                    transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                    transition: "opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s"
                }}>
                    <div className="project-content">
                        <div>
                            <p className="project-overline">Featured Project</p><h3 className="project-title"><a href="https://www.newline.co/courses/build-a-spotify-connected-app" rel="noopener noreferrer" target="_blank">Build a Spotify Connected App</a></h3><div className="project-description">
                                <p>Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.</p>
                                <p>Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app. By the end of the course, you’ll have an app deployed to the internet you can add to your portfolio.
                                </p>
                            </div>
                            <ul className="project-tech-list">
                                <li>React</li>
                                <li>Express</li>
                                <li>Spotify API</li>
                                <li>Styled Components</li>
                            </ul>
                            <div className="project-links">
                                <a href="https://www.newline.co/courses/build-a-spotify-connected-app" aria-label="Course Link" className="cta" rel="noopener noreferrer" target="_blank">Learn More</a></div></div></div><div className="project-image"><a href="https://www.newline.co/courses/build-a-spotify-connected-app" rel="noopener noreferrer" target="_blank">
                                    <div data-gatsby-image-wrapper="" className="gatsby-image-wrapper gatsby-image-wrapper-constrained img">
                                        <div className="max-w-[700px] block">
                                            {/* <img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height='394' width='700' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"> */}
        {/* </div>
                                        <img aria-hidden="true" data-placeholder-image="" decoding="async" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACqklEQVQozwGfAmD9AKa44Jeq3Iqd1H+SznaIynKDx2+Ax2x9xWt8xWt8xmx+x2+ByXKDzXmK0HyO04WX142f2pKn3J2x3qW64QCgtdyps82VptSQotSImtB4jMlpfsJofcJle8FrgMRvhMZ1i8mBlc96ks2quuCQp9ePqdajut2Vs9ebu9cAmrHal6XDj6XSiqHTg5rOc4zHZH/AZX/AX3u9fZXJrLzcsMDfrsDelq/U5uz1r8bfmLjVvtXkjrnOjrzNAJWz3IGj1XaWy2yMxWSEwGGCvl5/u1l8ulp/ull/uV+Gu2ONvGGOumeWvY20zHSnwHSrv4S4xXy3wIPAwQCJq9FsX2JiXGFYYGtYXmhQV2FUW2dqi7hmkMJulsFnlb1ilblvob5pobpqpbh7tL9ztLpos7FvvLJ1w7MAg6jLQzk3Pzk3RURCRkRDNjUzQD8/nLfPlbnXlrrSjLfNea7ClMLMnMnOl8rJn9LNk87FYLymX8CkZ8emAHypzC0vMygsMyYrMCUnKC8vLFBQS2SRsWumyWmkwGanvGSqt2yyt3K7t2u7sGvArXHGrWjHplbFmFrKmQB4rM0pJSMzKygwKignIyAgGBI9ODN7qsGOw9iLws+Iw8uFxcaEycGW08d8zLaJ1LuZ3cKQ27tPypBQzo8AebrdWX2NX36PU3eNQm6FLlpuJ1RnO5KxPaK9O6KxOqaqOquiObCaNLORMrmKNr+GPMWGOseBP8yCStKIAH3J7G/F72C97FS35kuy4Eax20Kx1j2rxzqrvTqvtTmyqzi2ojm6mlHGn1nMnlDOlFHQkVnVk0/Ui0TUggB3zO9mw+pYveZNuOFCs9s6sNQ2r80zscgys78xtbUxuaoxvJ8ywJZJy5pS0ZlQ05JO1YxY2ZBU2otE138AtHoe7OPKgAAAAABJRU5ErkJggg==" alt="" className="opacity-0 transition-opacity-[opacity 500ms linear 0s] object-cover" />
                                    </div>
                                </a>
                    </div> 
                </li> 
                */}
      </ul>
    </section>
  );
};

export default Projects;
