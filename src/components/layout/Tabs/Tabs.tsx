import React, { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import styles from './Tabs.module.scss';

interface ITabProps {
  label: string;
  // active: boolean;
}

interface ITabsProps {
  children: Array<{ props: ITabProps }>;
}

const Tab: FC<ITabProps> = ({ children }) => {
  return <>{children}</>;
};

const Tabs: FC<ITabsProps> = ({ children }) => {
  const [active, setActive] = useState(children[0].props.label);

  return (
    <>
      <motion.div layout className={styles.tabs}>
        {children.map(({ props: { label } }) => (
          <div
            key={label}
            onClick={() => setActive(label)}
            className={styles.tabWrapper}
          >
            <div className={styles.tab}>{label}</div>
            {active === label && (
              <motion.div
                layoutId="border"
                className={styles.tabBorder}
              ></motion.div>
            )}
          </div>
        ))}
      </motion.div>
      <AnimatePresence exitBeforeEnter>
        {children
          .filter(({ props: { label } }) => label === active)
          .map((child) => (
            <motion.div
              layout
              key={child.props.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              {child}
            </motion.div>
          ))}
      </AnimatePresence>
    </>
  );
};

export { Tab, Tabs };
