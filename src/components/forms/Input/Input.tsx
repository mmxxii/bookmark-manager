import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';

import styles from './Input.module.scss';
import { FieldProps } from 'formik';

const variants = {
  small: { top: 0, fontSize: '14px', transition: { type: 'spring' } },
  big: { top: 35, fontSize: '18px', transition: { type: 'spring' } },
};

const Input: FC<FieldProps> = ({ field, form, ...props }) => {
  const [focus, setFocus] = useState(false);

  const { value, name } = field;

  const handleBlur = (e: React.FocusEvent<any>) => {
    field.onBlur(e);
    setFocus(false);
  };

  return (
    <div className={styles.wrapper}>
      <input
        {...field}
        {...props}
        onFocus={() => setFocus(true)}
        onBlur={handleBlur}
        className={styles.input}
      />
      <motion.p
        animate={value || focus ? 'small' : 'big'}
        variants={variants}
        className={styles.label}
      >
        {name}
      </motion.p>
    </div>
  );
};

export default Input;
