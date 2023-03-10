import React, { useRef } from 'react';
import {
  useScroll,
  useSpring,
  motion,
  useCycle,
  AnimatePresence,
} from 'framer-motion';
import { useDimensions } from '../../hooks/useDimensions';
import { Navigation } from './Navigation';
import { MenuToggle } from './MenuToggle';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
    duration: 10,
  });

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <div
      style={{
        height: 'var(--nav-height)',
        backgroundColor: 'rgba(10, 25, 47, 0.85)',
        backdropFilter: 'blur(10px)',
        transition: 'var(--transition)',
      }}
      className="w-full filter-none !pointer-events-auto !select-auto z-20 fixed top-0 font-mono !text-xs"
    >
      <div className="w-full">
        <motion.div className="bg-accent h-[2px]" style={{ scaleX }} />
      </div>
      <header className="w-full py-4 sm:py-2 ">
        <div className="flex px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="w-full flex  items-center justify-between ">
            <div className="shrink-0">
              <a href="#" title="logo" className="flex">
                <img
                  className="w-auto h-10 md:h-16 "
                  src="/images/letter-n-2-logo.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="hidden md:flex items-center gap-x-10 font-mono">
              <nav className="hidden ml-10 mr-auto space-x-5 lg:ml-20 lg:space-x-7 md:flex md:items-center md:justify-start">
                <motion.a
                  initial={{ y: '-20px' }}
                  whileInView={{ y: 0 }}
                  transition={{
                    type: 'spring',
                    // stiffness: 100
                  }}
                  href="#about"
                  title=""
                  className=" font-normal text-gray-400 transition-all duration-200 hover:text-accent"
                >
                  About{' '}
                </motion.a>
                <motion.a
                  initial={{ y: '-20px' }}
                  whileInView={{ y: 0 }}
                  transition={{
                    type: 'spring',
                    delay: 0.1,
                  }}
                  href="#experience"
                  title=""
                  className=" font-normal text-gray-400 transition-all duration-200 hover:text-accent"
                >
                  {' '}
                  Experience{' '}
                </motion.a>

                <motion.a
                  initial={{ y: '-20px' }}
                  whileInView={{ y: 0 }}
                  transition={{
                    delay: 0.2,
                    type: 'spring',
                  }}
                  href="#work"
                  title=""
                  className=" font-normal text-gray-400 transition-all duration-200 hover:text-accent"
                >
                  Work{' '}
                </motion.a>

                <motion.a
                  initial={{ y: '-20px' }}
                  whileInView={{ y: 0 }}
                  transition={{
                    type: 'spring',
                  }}
                  href="#contact"
                  title=""
                  className=" font-normal text-gray-400 transition-all duration-200 hover:text-accent"
                >
                  Contact{' '}
                </motion.a>
              </nav>

              <div className="relative hidden md:items-center md:justify-center md:inline-flex group">
                <div className="absolute transition-all duration-200 rounded-sm -inset-px  group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                <motion.a
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  href="https://drive.google.com/file/d/1lzKJS8LSIAbiHUZlmm6VUa_whFL2npuR/view?usp=sharing"
                  rel="noreferrer"
                  title="resume"
                  target="_blank"
                  className="relative inline-flex items-center justify-center px-6 py-2  font-normal bg-transparent border border-accent hover:bg-accent/5 hover:bg-opacity-5 rounded-lg text-accent"
                  role="button"
                >
                  Resume
                </motion.a>
              </div>
            </div>

            <div className="flex md:hidden">
              <motion.nav
                className="flex flex-col items-end !text-lightest_slate relative"
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                custom={height}
                ref={containerRef}
              >
                <MenuToggle toggle={() => toggleOpen()} />
                {
                  // isOpen && (
                  <Navigation />
                  // )
                }
              </motion.nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
