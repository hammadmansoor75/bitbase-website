import React from 'react';
import './testimonials.css';
import Data from './Data';
export default function Testimonials() {
  return (
    <section className="testimonials section">
      <h2 className="section__title">My Clients Say</h2>
      <span className="section__subtitle">Testimonial</span>
      <div className="qualification__container container">
        {Data.map(({ id, image, title, description }) => {
          return (
            <div className="testimonial__card" key={id}>
              <img src={image} alt="" className="testimonial__img"></img>
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
