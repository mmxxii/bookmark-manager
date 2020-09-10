import React, { FC } from 'react';
import { motion } from 'framer-motion';

import styles from './Bookmarks.module.scss';

import { mockBookmarks } from './mock-bookmarks';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Bookmarks: FC = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={styles.container}
    >
      {mockBookmarks.map((bookmark, index) => (
        <motion.div key={index} variants={item} className={styles.bookmark}>
          <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
            {bookmark.name}
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Bookmarks;
