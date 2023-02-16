import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import styles from './UsePage.module.scss';

import Image1 from './../../assets/images/automat.jpg';


const UsePage: FC = () => {
  return (
    <div className={styles.usePageWrapper}>
      <p className={styles.usePageP}>Как пользоваться автоматом</p>
      <div className={styles.innerDivContainer}>
        <div className={styles.automatImage}>
          <img src={Image1} alt="" className={styles.automatImage}/>
        </div>
        <div className={styles.useSlider}>
          <Swiper  modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <div className={styles.pWrapperDiv}>
                <p className={styles.slider_p}>Подвесьте 5-6 л. бутыль за основание ручки,</p>
                <p className={styles.slider_p}>бутыль большей ёмкости установите на подставку</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.pWrapperDiv}>
                <p className={styles.slider_p}>Приложите АКВА КЛЮЧ к считывателю или внесите аванс,</p>
                <p className={styles.slider_p}>используя монеты или купюры</p>
                <p className={styles.slider_p}>Автомат принимает:</p>
                <p className={styles.slider_p}>- монеты достоинством 1, 2, 5, 10 рублей;</p>
                <p className={styles.slider_p}>- купюры 10, 50, 100, 500, 1000 рублей.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.pWrapperDiv}>
                <p className={styles.slider_p}>Нажмите кнопку 5 или 20 литров</p>
                <p className={styles.slider_p}>Автомат выдаёт воду порциями по 5 или 20 литров,</p>
                <p className={styles.slider_p}>в зависимости от того, какая кнопка будет нажата.</p>
                <p className={styles.slider_p}>Для остановки нажмите кнопку 5 или 20 литров повторно</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.pWrapperDiv}>
                <p className={styles.slider_p}>Если Вы внесли сумму больше, чем стоимость товара,</p>
                <p className={styles.slider_p}>который хотите приобрести, остаток средств можно</p>
                <p className={styles.slider_p}>сохранить на АКВА КЛЮЧЕ и воспользоваться им позже</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.pWrapperDiv}>
                <p className={styles.slider_p}>Если в течении 2 минут после внесения средств или</p>
                <p className={styles.slider_p}>автоматического прекращения подачи воды не будет</p>
                <p className={styles.slider_p}>нажата кнопка 5 или 20 литров,</p>
                <p className={styles.slider_p}>внесённая сумма (остаток) аннулируется!</p>
              </div>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default UsePage;
