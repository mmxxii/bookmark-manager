import React from 'react';
import { motion } from 'framer-motion';

import styles from './Brand.module.scss';

const pathVariants = {
  initial: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: { type: 'tween', duration: 1, delay: 0.5, ease: 'easeInOut' },
  },
};

const Brand: React.FC = () => {
  return (
    <div className={styles.container}>
      <svg
        className={styles.bookmark}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
      >
        <motion.path
          initial="initial"
          animate="animate"
          variants={pathVariants}
          d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
        ></motion.path>
      </svg>
      <h1 className={styles.heading}>
        Bookmark
        <br />
        manager
      </h1>
      <p className={styles.description}>A bookmark management app.</p>
    </div>
  );
};

export default Brand;
