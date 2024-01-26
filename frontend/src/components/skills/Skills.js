import React from 'react';
import './skills.css';
import Frontend from './Frontend';
import Backend from './Backend';
import Callibrate from './Callibrate';
import Evolve from './Evolve';
export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title skills_title">BitBase Marketing Team Process:</h2>
      <span className="section__subtitle">BitBase marketing team provides you with comprehensive solutions for go-to-market strategy <br></br>It doesn't stop here, our team of experts will be supporting you throughout the project.</span>
      <div className="skills__container container grid">
        <Frontend></Frontend>
        <Backend></Backend>
        <Callibrate/>
        <Evolve/>
      </div>
    </section>
  );
}
