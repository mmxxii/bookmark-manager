import React, { FC } from 'react';

import styles from './Login.module.scss';

import { useAuth } from '../../../contexts';
import { Input } from '../../forms';

const Login: FC = () => {
  const { login } = useAuth();

  return (
    <>
      <h2 className={styles.heading}>Welcome back!</h2>
      <form className={styles.form}>
        <Input type="email" label="email" />
        <Input type="password" label="password" />
        <button type="button" className={styles.button} onClick={login}>
          log in
        </button>
      </form>
    </>
  );
};

export default Login;
