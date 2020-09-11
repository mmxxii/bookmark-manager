import React, { FC } from 'react';
import { useAuth } from '../../../contexts';
import { Input } from '../../forms';

import styles from './Signup.module.scss';

const Signup: FC = () => {
  const { signup } = useAuth();

  return (
    <div>
      <h2 className={styles.heading}>Create an Account</h2>
      <form className={styles.form}>
        <Input type="email" label="email" />
        <Input type="text" label="username" />
        <Input type="password" label="password" />
        <button type="button" className={styles.button} onClick={signup}>
          sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
