import React, { FC } from 'react';
import { AnimatePresence } from 'framer-motion';

import styles from './App.module.scss';

import { useAuth } from './contexts';
import { Brand, Sidebar, SidebarWrapper } from './components/layout';
import { Bookmarks } from './components/bookmarks';
import { Auth } from './components/auth';

const App: FC = () => {
  const { user } = useAuth();

  return (
    <div className={styles.container}>
      <SidebarWrapper>
        <AnimatePresence exitBeforeEnter>
          {user ? <Sidebar key="sidebar" /> : <Brand key="brand" />}
        </AnimatePresence>
      </SidebarWrapper>
      <div className={styles.content}>
        <AnimatePresence exitBeforeEnter>
          {user ? <Bookmarks key="bookmarks" /> : <Auth key="auth" />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
