import React, { FC, useEffect } from 'react';

import styles from './FaqPage.module.scss';
import './styles.css';

const FaqPage: FC = () => {

  useEffect(() => {
    const accordions: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("accordion") as HTMLCollectionOf<HTMLElement>;
    console.log(accordions);
    
  for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function (this: HTMLElement) { console.log('activeAcc');
  
    this.classList.toggle("activeAcc");
    
    let answerDiv = this.nextElementSibling as HTMLElement;
    if (answerDiv.style.maxHeight) {
      //@ts-ignore
      answerDiv.style.maxHeight  = null;
    } else {
      answerDiv.style.maxHeight = answerDiv.scrollHeight + "px";
    }
   });
  }
  })
  

  return (
    <div className="containerFluid">
  <h2>Часто задаваемые вопросы</h2>
  <div className="accordion">
    <div className="icon"></div>
    <h5>Принцип работы автомата</h5>
  </div>
  <div className="answerDiv">
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.
    </p>
  </div>

  <div className="accordion">
    <div className="icon"></div>
    <h5>Как часто меняются фильтры?</h5>
  </div>
  <div className="answerDiv">
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.
    </p>
  </div>

  <div className="accordion">
    <div className="icon"></div>
    <h5>По каким анализам проверяем качество воды?</h5>
  </div>
  <div className="answerDiv">
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.
    </p>
  </div>

  <div className="accordion">
    <div className="icon"></div>
    <h5>Сколько стоит вода?</h5>
  </div>
  <div className="answerDiv">
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.
    </p>
  </div>

  <div className="accordion">
    <div className="icon"></div>
    <h5>В какую тару можно набрать воды?</h5>
  </div>
  <div className="answerDiv">
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.
    </p>
  </div>

  <div className="accordion">
    <div className="icon"></div>
    <h5>Даёт ли автомат сдачу?</h5>
  </div>
  <div className="answerDiv">
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.
    </p>
  </div>

  <div className="accordion">
    <div className="icon"></div>
    <h5>В какую тару можно набрать воды?</h5>
  </div>
  <div className="answerDiv">
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.
    </p>
  </div>

  <div className="accordion">
    <div className="icon"></div>
    <h5>Какие преимущества покупки воды по АКВА КЛЮЧУ?</h5>
  </div>
  <div className="answerDiv">
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.
    </p>
  </div>

  <div className="accordion">
    <div className="icon"></div>
    <h5>Где можно приобрести АКВА КЛЮЧ?</h5>
  </div>
  <div className="answerDiv">
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.
    </p>
  </div>
  
</div>
  );
};

export default FaqPage;
