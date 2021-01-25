import React, { FC } from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  disabled: boolean;
  children: string;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
