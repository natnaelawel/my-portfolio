import React, { useState, useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const HeroComponent = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section
      ref={ref}
      className="w-4/5 px-10 my-10 py-12 relative  overflow-hidden gap-y-10 sm:pb-16 lg:pb-20 xl:pb-24"
    >
      <div className="fadeup-enter-done  transition delay-100 py-5 text-xl text-accent">
        <h1 className="font-mono">Hi, my name is</h1>
      </div>
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-text-lightest_slate py-3">
        <div className="fadeup-enter-done transition delay-200">
          <h2 className="text-6xl font-bold  big-heading   ">
            Nathaniel Hussein.
          </h2>
        </div>
      </div>
      <div className="fadeup-enter-done transition delay-300">
        <h3 className=" text-6xl font-bold big-heading text-light_slate">
          I build things for the web.
        </h3>
      </div>
      <div className="fadeup-enter-done transition delay-400 my-5 w-3/5 tracking-wide leading-6">
        <p className="text-slate">
          Software engineer looking for full-time opportunities in businesses
          where I can make my most contribution. I&apos;m a passionate and
          hard-working individual who is dedicated to improving himself in all
          spheres and to assisting people in any manner I can.
          {/* A motivated software engineer looking to pursue a successful career in software development where I can help deliver software solutions to social problems. My skills include Web Development, Data Structures, Machine Learning, and DevOps. */}
        </p>
      </div>
      <div className="fadeup-enter-done transition duration-500 my-10">
        <a
          className="email-link text-accent bg-transparent border border-accent rounded-lg px-10 py-4 leading-4 cursor-pointer hover:bg-accent/5"
          href="https://www.newline.co/courses/build-a-spotify-connected-app"
          target="_blank"
          rel="noreferrer"
        >
          Hire Me!
        </a>
      </div>
    </section>
  );
};
export default HeroComponent;
