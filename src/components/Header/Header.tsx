import React, { FC } from 'react';
import Menu from '../Menu/Menu';

import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.logoDiv}>LOGO</div>
      <Menu/>
    </div>
  );
};

export default Header;
