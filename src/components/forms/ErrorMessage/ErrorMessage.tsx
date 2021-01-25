import React, { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './ErrorMessage.module.scss';

interface ErrorMessageProps {
  children: string | undefined;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ children: error }) => {
  return (
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
  );
};

export default ErrorMessage;
