import React, { FC } from 'react';
import { motion } from 'framer-motion';

import styles from './Brand.module.scss';

import { exitVariants } from '../../../lib/motion-variants';

const Brand: FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={exitVariants}
      className={styles.container}
    >
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>
          Bookmark
          <br />
          manager
        </h1>
        <p className={styles.description}>A bookmark management app.</p>
      </div>
    </motion.div>
  );
};

export default Brand;
