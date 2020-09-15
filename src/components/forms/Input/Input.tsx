import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './Input.module.scss';

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  inputRef: any;
  invalid: boolean;
  startAdornment?: JSX.Element;
}

const Input: FC<InputProps> = ({
  inputRef,
  invalid,
  startAdornment,
  ...props
}) => {
  return (
    <div className={styles.container}>
      <div className={classNames(styles.adornment, styles.startAdornment)}>
        {startAdornment}
      </div>
      <input
        {...props}
        ref={inputRef}
        className={classNames(styles.input, { [styles.invalid]: invalid })}
        autoComplete="off"
      />
      <div className={styles.border}></div>
    </div>
  );
};

export default Input;
