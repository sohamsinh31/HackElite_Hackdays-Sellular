import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>Vchat</div>
      <div className={styles.more}>
        More
        <div className={styles.menu}>
          <div>Option 1</div>
          <div>Option 2</div>
          <div>Option 3</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
