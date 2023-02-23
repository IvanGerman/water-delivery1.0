import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import style from './Header.module.scss';
import Logo from '../../assets/images/logo.png';
import LogoText from '../../assets/images/logo_text.png';


const Header = () => {

  const [nav, setNav] = useState(false);
  
  const menuUl = document.querySelector('#menu-ul');
  const removeBurgerMenu = () => {
    if (window.innerWidth <= 800) { 
      menuUl?.classList.remove(style.active);
      setNav(!nav) }
  }

  return (
    <header className={style.header}>
      <div className='container'>
        <div className={style.box}>
          <div className={style.logo_image}>
            <img src={Logo} alt='/' />
            <img src={LogoText} alt='/' />
          </div>
          <ul
            //@ts-ignore
            className={
              nav ? [style.menu, style.active].join(' ') : [style.menu]
            } id='menu-ul'
          >
            <li>
              <NavLink to="/" onClick={removeBurgerMenu}>MainPage</NavLink>
            </li>
            <li>
              <NavLink to="/filtersPage" onClick={removeBurgerMenu}>FiltersPage</NavLink>
            </li>
            <li>
              <NavLink to="/usePage" onClick={removeBurgerMenu}>UsePage</NavLink>
            </li>
            <li>
              <NavLink to="/mapPage" onClick={removeBurgerMenu}>MapPage</NavLink>
            </li>
            <li>
              <NavLink to="/reviewPage" onClick={removeBurgerMenu}>ReviewPage</NavLink>
            </li>
            <li>
              <NavLink to="/faqPage" onClick={removeBurgerMenu}>FaqPage</NavLink>
            </li>
          </ul>
          <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
 