import React, { FC } from 'react';

import styles from './FaqPage.module.scss';

const FaqPage: FC = () => {
  return (
    <div className={styles.faqPageWrapper}>
      <h2>Часто задаваемые вопросы</h2>
      <p>Принцип работы автомата</p>
      <p>Как часто меняются фильтры?</p>
      <p>По каким анализам проверяем качество воды?</p>
      <p>Сколько стоит вода?</p>
      <p>В какую тару можно набрать воды?</p>
      <p>Как вернуть деньги?</p>
    </div>
  );
};

export default FaqPage;
