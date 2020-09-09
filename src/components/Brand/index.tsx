import React from 'react';
import { motion } from 'framer-motion';
import styles from './Brand.module.scss';

const wrapperVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { type: 'tween', duration: 2, ease: 'easeInOut' },
  },
};

const pathVariants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: { type: 'tween', duration: 2, ease: 'easeInOut' },
  },
};

const Brand: React.FC = () => {
  return (
    <div className={styles.container}>
      <motion.div initial="hidden" animate="visible" variants={wrapperVariants}>
        <svg
          className={styles.bookmark}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <motion.path
            initial="hidden"
            animate="visible"
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
      </motion.div>
    </div>
  );
};

export default Brand;
