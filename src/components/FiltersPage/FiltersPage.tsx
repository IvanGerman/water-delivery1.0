import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import Image1 from './../../assets/images/spring.jpg';
import Image2 from './../../assets/images/winter.jpg';
import Image3 from './../../assets/images/summer.jpg';
import Image4 from './../../assets/images/autumn.jpg';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './swiper-slide.css';
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
      //onSwiper={(swiper) => console.log(swiper)}
      //onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <img src={Image1} alt='' className={styles.slide4img} />
          <p className={styles.slider_p}>slide 1</p>
        </SwiperSlide>
        
        <SwiperSlide>
          <img src={Image2} alt='' className={styles.slide4img} />
          <p className={styles.slider_p}>slide 2</p>
        </SwiperSlide>
        
        <SwiperSlide>
          <img src={Image3} alt='' className={styles.slide4img} />
          <p className={styles.slider_p}>slide 3</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Image4} alt='' className={styles.slide4img} />
          <p className={styles.slider_p}>slide 4</p>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default FiltersPage;






// thumbs-gallery
// import React, { FC, useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode, Navigation, Thumbs } from "swiper";

// import Image1 from './../../assets/images/spring.jpg';
// import Image2 from './../../assets/images/winter.jpg';
// import Image3 from './../../assets/images/summer.jpg';
// import Image4 from './../../assets/images/autumn.jpg';


// import 'swiper/css';
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";


// import './swiper-slide.css';
// import styles from './FiltersPage.module.scss'; 

// const FiltersPage: FC = () => {

//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   return (
//     <div className={styles.filtersPageWrapper}>
//       <Swiper
//         style={{// @ts-ignore
//           "--swiper-navigation-color": "#fff",
//           "--swiper-pagination-color": "#fff",
//         }}
//         spaceBetween={10}
//         navigation={true}
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper2"
//       >
//         <SwiperSlide>
//           <img src={Image1} alt='' className={styles.slide4img} />
//           <p className={styles.slider_p}>slide 1</p>
//         </SwiperSlide>
        
//         <SwiperSlide>
//           <img src={Image2} alt='' className={styles.slide4img} />
//           <p className={styles.slider_p}>slide 2</p>
//         </SwiperSlide>
        
//         <SwiperSlide>
//           <img src={Image3} alt='' className={styles.slide4img} />
//           <p className={styles.slider_p}>slide 3</p>
//         </SwiperSlide>

//         <SwiperSlide>
//           <img src={Image4} alt='' className={styles.slide4img} />
//           <p className={styles.slider_p}>slide 4</p>
//         </SwiperSlide>

//       </Swiper>

//       <Swiper
//         // @ts-ignore
//         onSwiper={setThumbsSwiper}
//         spaceBetween={10}
//         slidesPerView={4}
//         freeMode={true}
//         watchSlidesProgress={true}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src={Image1} alt='' className={styles.slide4img} />
//         </SwiperSlide>
//         <SwiperSlide>
//          <img src={Image2} alt='' className={styles.slide4img} />
//         </SwiperSlide>
//         <SwiperSlide>
//          <img src={Image3} alt='' className={styles.slide4img} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={Image4} alt='' className={styles.slide4img} />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default FiltersPage;
