import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Service2 from './components/services/Service2';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';
function App() {
  return (
    <div>
      <Header></Header>
      <main className="main">
        <Home></Home>
        {/* <About></About> */}
        <Skills></Skills>
        {/* <Service2></Service2> */}
        <Qualification></Qualification>
        <Contact></Contact>
      </main>
      {/* <Footer></Footer> */}
      <Scrollup></Scrollup>
    </div>
  );
}

export default App;
