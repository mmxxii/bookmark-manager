import React, { FC } from 'react';
import { motion } from 'framer-motion';

import styles from './Brand.module.scss';

import { exitVariants } from '../../../lib/motion-variants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <FontAwesomeIcon
          icon="bookmark"
          className={styles.bookmark}
          size="5x"
        />
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
