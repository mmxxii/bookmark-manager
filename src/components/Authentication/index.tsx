import React from 'react';
import { motion } from 'framer-motion';

import styles from './Authentication.module.scss';

import Login from './Login';

const iconWrapperVariants = {
  initial: { scale: 0.5 },
  animate: {
    scale: 1,
    transition: { type: 'spring' },
  },
};

const pathVariants = {
  initial: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: { type: 'tween', duration: 1, delay: 0.5, ease: 'easeInOut' },
  },
};

const circleVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { type: 'tween', duration: 1, delay: 0.5, ease: 'easeInOut' },
  },
};

const Authentication = () => {
  return (
    <div className={styles.container}>
      <motion.div
        initial="initial"
        animate="animate"
        variants={iconWrapperVariants}
        className={styles.iconWrapper}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className={styles.icon}
        >
          <motion.path
            initial="initial"
            animate="animate"
            variants={pathVariants}
            d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
          ></motion.path>
          <motion.circle
            initial="initial"
            animate="animate"
            variants={circleVariants}
            cx="12"
            cy="7"
            r="4"
          ></motion.circle>
        </svg>
      </motion.div>
      <Login />
    </div>
  );
};

export default Authentication;
