import React, { FC } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import styles from './Login.module.scss';

import { useAuth } from '../../../contexts';
import { Input } from '../../forms';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('invalid email').required('required'),
  password: Yup.string().min(8, 'too short').required('required'),
});

const Login: FC = () => {
  const { logIn } = useAuth();

  return (
    <>
      <h2 className={styles.heading}>Welcome back!</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={async ({ email, password }, { setSubmitting }) => {
          await logIn!(email, password);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <Field name="email" type="email" component={Input} />
            <Field name="password" type="password" component={Input} />
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.button}
            >
              log in
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;
