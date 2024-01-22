import React from 'react';
import './qualification.css';
export default function Qualification() {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button button--flex">
            <i className="uil uil-graduation-cap qualification__active qualification__icon"></i>{' '}
            Education
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content-active">
            <div className="qualification__data">
              <h3 className="qualification__title">Software Engineering</h3>
              <span className="qualification__subtitle">
                FAST NUCES Islamabad
              </span>
              <div className="qualification__calender">
                <i class="uil uil-calender"></i> 2020-2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
