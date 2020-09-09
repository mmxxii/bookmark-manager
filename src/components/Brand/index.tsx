import React from 'react';
import styles from './Brand.module.scss';
import { ReactComponent as Bookmark } from '../../assets/images/bookmark.svg';

const Brand: React.FC = () => {
  return (
    <div className={styles.container}>
      <Bookmark className={styles.bookmark} />
      <h1 className={styles.heading}>
        Bookmark
        <br />
        manager
      </h1>
      <p className={styles.description}>A bookmark management app.</p>
    </div>
  );
};

export default Brand;
