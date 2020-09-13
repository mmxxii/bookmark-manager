import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import styles from './Login.module.scss';

import { useAuth } from '../../../contexts';
import { Input } from '../../forms';
import { Button } from '../../layout';

const schema = yup.object().shape({
  email: yup.string().required('required').email('invalid email'),
  password: yup.string().required('required').min(8, 'too short'),
});

interface LoginForm {
  email: string;
  password: string;
}

const Login: FC = () => {
  const { logIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    errors,
  } = useForm<LoginForm>({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async ({ email, password }) => {
    await logIn!(email, password);
  });

  return (
    <>
      <h2 className={styles.heading}>Welcome back!</h2>
      <form onSubmit={onSubmit}>
        <Input
          name="email"
          type="email"
          placeholder="email"
          inputRef={register}
          error={errors.email?.message}
        />
        <Input
          name="password"
          type="password"
          placeholder="password"
          inputRef={register}
          error={errors.password?.message}
        />
        <Button type="submit" disabled={isSubmitting}>
          log in
        </Button>
      </form>
    </>
  );
};

export default Login;
