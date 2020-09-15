import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './UserIcon.module.scss';

const UserIcon: FC = () => {
  return (
    <motion.div
      layout
      initial="initial"
      animate="animate"
      className={styles.container}
    >
      <FontAwesomeIcon icon="user" className={styles.icon} size="2x" />
    </motion.div>
  );
};

export default UserIcon;
