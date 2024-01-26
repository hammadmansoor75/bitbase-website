import React from 'react';
import './home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import form from '../../assets/form.png'; // Assuming you have the correct path to your image

export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div>
            <h1 className='home__heading'>Drive growth at scale for your brand.</h1>
          </div>
          
          {/* Form Section */}
          <div className="form-container">
            <img src={form} alt="Form" className="form-image" />
            <h2 className="form-heading">What are you interested in?</h2>
            <p className='small_text'>Select all that apply:</p>

            <div className="form-grid">
              {/* First Column */}
              <div className="form-column">
                <div className="form-service">Service 1</div>
                <div className="form-service">Service 2</div>
                <div className="form-service">Service 3</div>
              </div>

              {/* Second Column */}
              <div className="form-column">
                <div className="form-service">Service 4</div>
                <div className="form-service">Service 5</div>
                <div className="form-service">Service 6</div>
              </div>
            </div>

            <div className="form-button">
              <button type="button">Submit <span>&rarr;</span></button>
            </div>
          </div>
        </div>
        
        <ScrollDown></ScrollDown>
      </div>
    </section>
  );
}
