import React, { FC } from 'react';
import { motion } from 'framer-motion';

import styles from './Bookmarks.module.scss';

import { mockBookmarks } from './mock-bookmarks';

const container = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, transition: { type: 'spring', delay: 0.5 } },
};

const Bookmarks: FC = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={styles.container}
    >
      {mockBookmarks.map((bookmark) => (
        <div key={bookmark.id} className={styles.bookmark}>
          <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
            {bookmark.name}
          </a>
        </div>
      ))}
    </motion.div>
  );
};

export default Bookmarks;
