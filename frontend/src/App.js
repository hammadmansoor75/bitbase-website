import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Service2 from './components/services/Service2';
import Qualification from './components/Principles/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ServicesPage from './pages/services/ServicesPage';
import ContactPage from './pages/contact/ContactPage';
import AboutPage from './pages/about/AboutPage';

function App() {
  return (

    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage/>} ></Route>
          <Route path='/services' element={<ServicesPage/>} ></Route>
          <Route path='/contact' element={<ContactPage/>} ></Route>
          <Route path='/about' element={<AboutPage/>} ></Route>
        </Routes>
        <Footer />
        <Scrollup />
      </BrowserRouter>
    </div>

    
  );
}

export default App;
