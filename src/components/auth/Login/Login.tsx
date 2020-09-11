import React, { FC, useState } from 'react';

import styles from './Login.module.scss';

import { useAuth } from '../../../contexts';
import { Input } from '../../forms';

const Login: FC = () => {
  const { logIn } = useAuth();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <>
      <h2 className={styles.heading}>Welcome back!</h2>
      <form className={styles.form}>
        <Input
          type="email"
          label="email"
          value={email}
          onChange={(value) => setEmail(value)}
        />
        <Input
          type="password"
          label="password"
          value={password}
          onChange={(value) => setPassword(value)}
        />
        <button
          type="button"
          className={styles.button}
          onClick={() => logIn && logIn(email, password)}
        >
          log in
        </button>
      </form>
    </>
  );
};

export default Login;
