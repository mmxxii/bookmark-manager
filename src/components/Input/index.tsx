import React, { useState, ChangeEvent } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  type: 'email' | 'password';
  label: string;
}

const Input: React.FC<InputProps> = ({ type, label }) => {
  const [value, setValue] = useState<string | null>(null);
  const [focus, setFocus] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const labelClasses = [styles.label];

  if (value || focus) labelClasses.push(styles.activeLabel);

  return (
    <div className={styles.wrapper}>
      <input
        type={type}
        className={styles.input}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(event) => handleChange(event)}
      />
      {label && <p className={labelClasses.join(' ')}>{label}</p>}
    </div>
  );
};

export default Input;
