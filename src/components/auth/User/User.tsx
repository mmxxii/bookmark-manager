import React, { FC } from 'react';

import styles from './User.module.scss';

import { UserIcon } from '..';
import { useAuth } from '../../../contexts';

const User: FC = () => {
  const { user, signOut } = useAuth();

  return (
    <div className={styles.container}>
      <UserIcon />
      <div className={styles.info}>
        <div className={styles.email}>{user?.email}</div>
        <div className={styles.signOut} onClick={() => signOut && signOut()}>
          Sign Out -&gt;
        </div>
      </div>
    </div>
  );
};

export default User;
