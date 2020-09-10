import React from 'react';
import { motion } from 'framer-motion';

import styles from './App.module.scss';

import Brand from './components/Brand';
import Authentication from './components/Authentication';

const variants = {
  start: { width: '55%' },
  end: { width: '50%', transition: { type: 'spring' } },
};

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <motion.div initial="start" animate="end" variants={variants}>
        <Brand />
      </motion.div>
      <div className={styles.section}>
        <Authentication />
      </div>
    </div>
  );
};

export default App;
