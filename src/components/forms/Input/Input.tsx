import React, { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import classNames from 'classnames';

import styles from './Input.module.scss';

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  inputRef: any;
  error: string | undefined;
}

const Input: FC<InputProps> = ({ inputRef, error, ...props }) => {
  return (
    <>
      <input
        {...props}
        ref={inputRef}
        className={classNames(styles.input, { [styles.invalid]: error })}
        autoComplete="off"
      />
      <div className={styles.error}>
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ type: 'tween' }}
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Input;
