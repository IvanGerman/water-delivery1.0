import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import styles from './FiltersPage.module.scss'; 

const FiltersPage: FC = () => {
  return (
    <div className={styles.filtersPageWrapper}>
      <Swiper
        // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><div className={styles.slide1}></div></SwiperSlide>
        <SwiperSlide><div className={styles.slide2}></div></SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide3}>
            <img src='./../../assets/images/spring.jpg' alt='' className={styles.slide3img} />
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FiltersPage;
