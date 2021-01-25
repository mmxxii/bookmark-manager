import React, { FC } from 'react';
import { motion } from 'framer-motion';

import styles from './Bookmarks.module.scss';

import { mockBookmarks } from '../mock-bookmarks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const container = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, transition: { type: 'spring', delay: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const Bookmarks: FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      variants={container}
      className={styles.container}
    >
      {mockBookmarks.map((bookmark) => (
        <div key={bookmark.id} className={styles.bookmark}>
          <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
            {bookmark.name}
          </a>
          <div className={styles.tools}>
            <FontAwesomeIcon icon="pen" />
            <FontAwesomeIcon icon="trash" />
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Bookmarks;
