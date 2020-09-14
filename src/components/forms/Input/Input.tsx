import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './Input.module.scss';

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  inputRef: any;
  invalid: boolean;
}

const Input: FC<InputProps> = ({ inputRef, invalid, ...props }) => {
  return (
    <input
      {...props}
      ref={inputRef}
      className={classNames(styles.input, { [styles.invalid]: invalid })}
      autoComplete="off"
    />
  );
};

export default Input;
