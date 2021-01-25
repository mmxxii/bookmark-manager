import React, { FC } from 'react';
import { motion } from 'framer-motion';

import styles from './Sidebar.module.scss';

import { useAuth } from '../../../contexts';
import { BookmarkTree } from '../../bookmarks';
import { User } from '../../auth';

const variants = {
  start: { width: '45%' },
  expanded: { width: '50%', transition: { type: 'spring' } },
  narrow: { width: 400, transition: { type: 'spring' } },
};

const SidebarWrapper: FC = ({ children }) => {
  const { user } = useAuth();

  return (
    <motion.div
      initial="start"
      animate={user ? 'narrow' : 'expanded'}
      variants={variants}
      className={styles.container}
    >
      {children}
    </motion.div>
  );
};

const Sidebar: FC = () => {
  return (
    <div className={styles.sidebar}>
      <User />
      <BookmarkTree />
    </div>
  );
};

export { SidebarWrapper, Sidebar };
