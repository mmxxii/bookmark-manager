import React, { FC } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';

import styles from './Auth.module.scss';

import { exitVariants } from '../../../lib/motion-variants';
import { UserIcon, Login, Signup } from '..';
import { Tabs, Tab } from '../../layout';

const Authentication: FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={exitVariants}
    >
      <AnimateSharedLayout>
        <div className={styles.container}>
          <div className={styles.userIconWrapper}>
            <UserIcon />
          </div>
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
