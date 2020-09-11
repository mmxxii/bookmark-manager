import React, { FC } from 'react';
import { AnimatePresence } from 'framer-motion';

import styles from './App.module.scss';

import { useAuth } from './contexts/auth';
import Brand from './components/Brand';
import Auth from './components/Auth';
import BookmarkTree from './components/BookmarkTree';
import Bookmarks from './components/Bookmarks';
import Sidebar from './components/Sidebar';

// const BookmarkTree = React.lazy(() => import('./components/BookmarkTree'));
// const Bookmarks = React.lazy(() => import('./components/Bookmarks'));

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
