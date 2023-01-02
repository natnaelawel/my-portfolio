import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';

const variants = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const navigationItems = [
  {
    id: 1,
    title: 'About',
    link: '#about',
  },
  {
    id: 2,
    title: 'Experience',
    link: '#experience',
  },
  {
    id: 3,
    title: 'Work',
    link: '#work',
  },
  {
    id: 4,
    title: 'Contact',
    link: '#contact',
  },
];

export const Navigation = () => (
  <motion.ul
    style={{
      boxShadow: '0 10px 30px -15px var(--navy-shadow)',
      borderRadius: 'var(--border-radius)',
      transition: 'var(--transition)',
    }}
    className="min-w-[200px] flex flex-col p-5 gap-y-3 bg-light_navy rounded-xl absolute top-5 right-0"
    variants={variants}
  >
    {navigationItems.map((navItem) => (
      <MenuItem navItem={navItem} key={navItem.id} />
    ))}
  </motion.ul>
);
