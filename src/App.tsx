import React, { FC } from 'react';
import {Route, Routes} from 'react-router-dom';

import './App.css';
import FaqPage from './components/FaqPage/FaqPage';
import FiltersPage from './components/FiltersPage/FiltersPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import MapPage from './components/MapPage/MapPage';
import ReviewPage from './components/ReviewPage/ReviewPage';
import UsePage from './components/UsePage/UsePage';


const App: FC = () => {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="filtersPage/*" element={<FiltersPage/>}/>
        <Route path="usePage/*" element={<UsePage/>}/>
        <Route path="mapPage/*" element={<MapPage/>}/>
        <Route path="reviewPage/*" element={<ReviewPage/>}/> 
        <Route path="faqPage/*" element={<FaqPage/>}/>        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
