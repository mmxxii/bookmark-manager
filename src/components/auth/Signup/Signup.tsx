import React, { FC, useState } from 'react';
import { useAuth } from '../../../contexts';
import { Input } from '../../forms';

import styles from './Signup.module.scss';

const Signup: FC = () => {
  const { signUp } = useAuth();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div>
      <h2 className={styles.heading}>Create an Account</h2>
      <form className={styles.form}>
        <Input
          type="email"
          label="email"
          value={email}
          onChange={(value) => setEmail(value)}
        />
        <Input type="text" label="username" value={null} onChange={() => {}} />
        <Input
          type="password"
          label="password"
          value={password}
          onChange={(value) => setPassword(value)}
        />
        <button
          type="button"
          className={styles.button}
          onClick={() => signUp && signUp(email, password)}
        >
          sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
