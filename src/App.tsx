import React, { FC } from 'react';
import { AnimatePresence } from 'framer-motion';

import styles from './App.module.scss';

import { useAuth } from './contexts';
import { Brand, Sidebar } from './components/layout';
import { Bookmarks, BookmarkTree } from './components/bookmarks';
import { Auth } from './components/auth';

const App: FC = () => {
  const { user } = useAuth();

  return (
    <div className={styles.container}>
      <Sidebar>
        <AnimatePresence exitBeforeEnter>
          {user ? <BookmarkTree key="bookmark-tree" /> : <Brand key="brand" />}
        </AnimatePresence>
      </Sidebar>
      <div className={styles.content}>
        <AnimatePresence exitBeforeEnter>
          {user ? <Bookmarks key="bookmarks" /> : <Auth key="auth" />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
