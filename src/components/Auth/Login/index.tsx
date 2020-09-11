import React from 'react';

import styles from './Login.module.scss';

import Input from '../../Input';
import { useAuth } from '../../../contexts/auth';

const Login: React.FC = () => {
  const { login } = useAuth();

  return (
    <>
      <h2 className={styles.heading}>Welcome back!</h2>
      <p className={styles.paragraph}>
        New here? <a href="/">Create an account -&gt;</a>
      </p>
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
