import React, { useState } from 'react';
import './home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import form from '../../assets/form.png'; // Assuming you have the correct path to your image
import form2 from '../../assets/form2.png';

export default function Home() {
  // State to track the current form
  const [currentForm, setCurrentForm] = useState(1);

  // Function to handle the next button click
  const handleNextClick = () => {
    setCurrentForm(2); // Change to form 2
  };
  const handlePreviousClick = () => {
    setCurrentForm(1); // Change back to form 1
  };
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div>
            <h1 className='home__heading'>Strategic Funding and Growth Partner for Blockchain/Crypto Start-ups</h1>
          </div>
          
          {/* Form 1 Section */}
          {currentForm === 1 && (
            <div className="form-container">
              <img src={form} alt="Form" className="form-image" />
              <h2 className="form-heading">What are you interested in?</h2>
              <p className='small_text'>Select all that apply:</p>

              <div className="form-grid">
                {/* First Column */}
                <div className="form-column">
                  <div className="form-service">VC Funding </div>
                  <div className="form-service">Presale/ICO</div>
                  <div className="form-service">PR Campaigns </div>
                </div>

                {/* Second Column */}
                <div className="form-column">
                  <div className="form-service">Digital Marketing</div>
                  <div className="form-service">Ambassadors</div>
                  <div className="form-service">Technical support</div>
                </div>
              </div>

              <div className="form-button">
                <button type="button" onClick={handleNextClick}>Next <span>&rarr;</span></button>
              </div>
            </div>
          )}

          {/* Form 2 Section */}
          {currentForm === 2 && (
            <div className="form-container">
              <img src={form2} alt="Form" className="form-image" />
              <h2 className="form-heading">Provide Details:</h2>

              <div className="form-field">
                <label htmlFor="projectIntro">Write a short intro for your project:</label>
                <textarea id="projectIntro" name="projectIntro" rows="4"></textarea>
              </div>

              <div className="form-field">
                <label htmlFor="websiteLink">Website link:</label>
                <input type="text" id="websiteLink" name="websiteLink" />
              </div>

              <div className="form-field">
                <label htmlFor="contactInfo">Provide a Telegram username or official Email for Contact:</label>
                <input type="text" id="contactInfo" name="contactInfo" />
              </div>

              <div className="form-field">
                <label htmlFor="furtherDetails">Any further details (Optional):</label>
                <textarea id="furtherDetails" name="furtherDetails" rows="4"></textarea>
              </div>

              <div className="form-buttonn">
                <button type="button" onClick={handlePreviousClick}>Previous <span>&larr;</span></button>
                <button type="submit">Submit</button>
              </div>
            </div>
          )}
        </div>
        
        <ScrollDown></ScrollDown>
      </div>
    </section>
  );
}
