import React, { FC, useEffect } from 'react';

import styles from './FaqPage.module.scss';
import './styles.css';

const FaqPage: FC = () => {

  useEffect(() => {
    const accordions = document.getElementsByClassName("accordion");
    console.log(accordions);
    
  for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    //@ts-ignore
    this.classList.toggle("active");
    //@ts-ignore
    let answerDiv = this.nextElementSibling;
    if (answerDiv.style.maxHeight) {
      answerDiv.style.maxHeight = null;
    } else {
      answerDiv.style.maxHeight = answerDiv.scrollHeight + "px";
    }
   });
  }
  })
  

  return (
    <div className="containerFluid">
  <h2>Frequently Asked Questions(FAQs)</h2>
  <div className="accordion">
    <div className="icon"></div>
    <h5>What is Lorem Ipsum?</h5>
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
    <h5>Why do we use it?</h5>
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
    <h5>Where does it come from?</h5>
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
    <h5>Why do we use it?</h5>
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
    <h5>Where does it come from?</h5>
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
    <h5>Where does it come from?</h5>
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
