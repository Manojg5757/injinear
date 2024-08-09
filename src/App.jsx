import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Offer from './pages/Offer';
import About from './pages/About';
import Store from './pages/Store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Slider from './components/Slider';
import BigScreenSlider from './components/BigScreenSlider';
import MoveToTop from './components/MoveToTop';

const App = () => {
  const location = useLocation();

  // Determine whether to render the Slider based on the current path
  const showSlider = location.pathname !== '/offer';
  const bigScreenSlider = location.pathname !== '/offer';


  return (
    <>
      <Navbar />
      {showSlider && <Slider />}
      {bigScreenSlider && <BigScreenSlider />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/about' element={<About />} />
        <Route path='/offer' element={<Offer />} />
      </Routes>
      <Footer />
      <MoveToTop />
    </>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
