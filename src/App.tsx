import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import styles from './App.module.scss';

import { useAuth } from './contexts/auth';
import Brand from './components/Brand';
import Authentication from './components/Authentication';
import BookmarkTree from './components/BookmarkTree';
import Bookmarks from './components/Bookmarks';

// const BookmarkTree = React.lazy(() => import('./components/BookmarkTree'));
// const Bookmarks = React.lazy(() => import('./components/Bookmarks'));

const sidebarVariants = {
  start: { width: '55%' },
  expanded: { width: '50%', transition: { type: 'spring' } },
  narrow: { width: 400, transition: { type: 'spring' } },
};

const brandVariants = {
  initial: { opacity: 0, x: -200 },
  animate: { opacity: 1, x: 0, transition: { type: 'spring' } },
  exit: { opacity: 0, x: 300, transition: { type: 'spring' } },
};

const authenticationVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { type: 'spring' } },
  exit: { opacity: 0, transition: { type: 'spring' } },
};

const App: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className={styles.container}>
      <motion.div
        initial="start"
        animate={user ? 'narrow' : 'expanded'}
        variants={sidebarVariants}
        className={styles.sidebar}
      >
        <AnimatePresence>
          {!user && (
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={brandVariants}
            >
              <Brand />
            </motion.div>
          )}
        </AnimatePresence>
        {user && <BookmarkTree />}
      </motion.div>
      <div className={styles.content}>
        <AnimatePresence>
          {!user && (
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={authenticationVariants}
            >
              <Authentication />
            </motion.div>
          )}
        </AnimatePresence>
        {user && <Bookmarks />}
      </div>
    </div>
  );
};

export default App;
