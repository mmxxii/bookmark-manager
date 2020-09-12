import React, { FC } from 'react';
import { Field, Form, Formik } from 'formik';

import styles from './Signup.module.scss';

import { useAuth } from '../../../contexts';
import { Input } from '../../forms';

const Signup: FC = () => {
  const { signUp } = useAuth();

  return (
    <>
      <h2 className={styles.heading}>Create an Account</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async ({ email, password }, { setSubmitting }) => {
          await signUp!(email, password);
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
              sign up
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Signup;
