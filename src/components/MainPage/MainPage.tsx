import React, { FC } from 'react';

import styles from './MainPage.module.scss';

const MainPage: FC = () => {
  return (
    <div className={styles.mainPageWrapper}>
      <p className={styles.rodnichokP}>Родничок</p>
      <h1>Сеть автоматов питьевой воды</h1>     
    </div>
  );
};

export default MainPage;
