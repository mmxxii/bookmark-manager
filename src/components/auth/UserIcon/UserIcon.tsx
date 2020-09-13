import React, { FC } from 'react';
import { motion } from 'framer-motion';

import styles from './UserIcon.module.scss';

const UserIcon: FC = () => {
  return (
    <motion.div
      layout
      initial="initial"
      animate="animate"
      className={styles.container}
    ></motion.div>
  );
};

export default UserIcon;
