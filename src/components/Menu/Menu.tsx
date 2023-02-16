import React, { FC } from 'react';
import { NavLink } from "react-router-dom";

import styles from './Menu.module.scss';


const Menu: FC = () => {
  return (
    <nav className={styles.navbarWrapper}>
      
      <NavLink to="/">MainPage</NavLink>
      <NavLink to="/filtersPage">FiltersPage</NavLink>
      <NavLink to="/usePage">UsePage</NavLink>
      <NavLink to="/mapPage">MapPage</NavLink>
      <NavLink to="/reviewPage">ReviewPage</NavLink>
      <NavLink to="/faqPage">FaqPage</NavLink>

    </nav>
    
  );
};

export default Menu;
