import React from 'react';
import styles from './App.module.scss';
import Brand from './components/Brand';
import Authentication from './components/Authentication';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <Brand />
      </div>
      <div className={styles.section}>
        <Authentication />
      </div>
    </div>
  );
};

export default App;
