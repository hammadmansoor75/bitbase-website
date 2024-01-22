import React from 'react';
import './home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div>
            <h1 className='home__heading'>Drive growth at scale for your brand.</h1>
          </div>
          {/* <Social></Social>
          <div className="home__img"></div>
          <Data></Data> */}
        </div>
        <ScrollDown></ScrollDown>
      </div>
    </section>
  );
}
