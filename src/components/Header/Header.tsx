import React, { FC, useEffect, useState, useReducer  } from 'react';
import './Header.scss';

import Menu from '../Menu/Menu';

//import styles from './Header.module.scss';



const Header: FC = () => {  
  
  function rerender() {  console.log('rerender');
    //toggling isActive true/false
    setIsActive(current => !current);
  }

  let [isActive, setIsActive] = useState(false);

  useEffect (() => {
    const hamb = document.querySelector("#hamb");
    const popup = document.querySelector("#popup");  
    const body = document.body;
    //@ts-ignore
    const menu = document.querySelector("#menu").cloneNode(1);
  
    const renderPopup = () =>  {
      console.log('renderPopup') 
      popup?.appendChild(menu);
      
    }

    //@ts-ignore
    const links = Array.from(menu.children);

    const closeOnClick = () => { console.log('closeOnClick');
      popup?.classList.remove("open");
      hamb?.classList.remove("active");
      body.classList.remove("noscroll");
      //rerender here too
    }

    links.forEach((link) => {
      //@ts-ignore
      link.addEventListener("click", closeOnClick);
    });



    const hambHandler = (e: React.MouseEvent<HTMLInputElement>) => {
      e.preventDefault();
      console.log('hambHandler')
      popup?.classList.toggle("open");
      //hamb?.classList.toggle(clname);
      body.classList.toggle("noscroll");
      renderPopup();
      // here we need rerender probably       
      rerender();
    }
    
    if (isActive === false) {
      //@ts-ignore
    hamb?.addEventListener("click", hambHandler);
    }
    if (isActive === true) {
      //@ts-ignore
    hamb?.removeEventListener("click", hambHandler);
    }
    
  });
  
  console.log('isActive bevor render---', isActive);
  
  return (
    <>
      <nav className='navbar'>
      <div className='container'>
        <div className='navbar__wrap'>
          <div className='hamb'>
            <div className={isActive ? 'hamb__field active' : 'hamb__field' } id="hamb">
              <span className='bar'></span> <span className='bar'></span>
              <span className='bar'></span>
            </div>
          </div>
          <a href="#" className='logo' id="logo">Logo</a>
          <ul className='menu' id="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Benefits</a></li>
            <li><a href="#">Prices</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div className='popup' id="popup"></div>
    </>
  );
};

export default Header;
