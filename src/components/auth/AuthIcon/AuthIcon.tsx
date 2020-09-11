import React from 'react';
import { motion } from 'framer-motion';

import styles from './AuthIcon.module.scss';
import {
  svgCircleVariants,
  svgPathVariants,
} from '../../../lib/motion-variants';

const iconWrapperVariants = {
  initial: { scale: 0.5 },
  animate: { scale: 1, transition: { type: 'spring' } },
};

const AuthIcon = () => {
  return (
    <motion.div
      layout
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
          variants={svgPathVariants}
          d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
        ></motion.path>
        <motion.circle
          initial="initial"
          animate="animate"
          variants={svgCircleVariants}
          cx="12"
          cy="7"
          r="4"
        ></motion.circle>
      </svg>
    </motion.div>
  );
};

export default AuthIcon;
