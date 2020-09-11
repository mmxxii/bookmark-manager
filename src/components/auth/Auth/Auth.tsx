import React, { FC } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';

import styles from './Auth.module.scss';

import { exitVariants } from '../../../lib/motion-variants';
import { AuthIcon, Login, Signup } from '..';
import { Tabs, Tab } from '../../layout';

const Authentication: FC = () => {
  return (
    <motion.div animate="animate" exit="exit" variants={exitVariants}>
      <AnimateSharedLayout>
        <div className={styles.container}>
          <AuthIcon />
          <Tabs>
            <Tab label="Log In">
              <Login />
            </Tab>
            <Tab label="Sign Up">
              <Signup />
            </Tab>
          </Tabs>
        </div>
      </AnimateSharedLayout>
    </motion.div>
  );
};

export default Authentication;
