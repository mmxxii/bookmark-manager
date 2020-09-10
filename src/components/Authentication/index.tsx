import React from 'react';
import { motion } from 'framer-motion';

import styles from './Authentication.module.scss';

import Login from './Login';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { type: 'spring' } },
};

const Authentication = () => {
  return (
    <div className={styles.container}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className={styles.wrapper}
      >
        <div className={styles.icon}></div>
        <Login />
      </motion.div>
    </div>
  );
};

export default Authentication;
