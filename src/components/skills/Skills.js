import React from 'react';
import './skills.css';
import Frontend from './Frontend';
import Backend from './Backend';
import Callibrate from './Callibrate';
import Evolve from './Evolve';
export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title skills_title">Our proven process</h2>
      <span className="section__subtitle">Marketing fundamentals drive results – not tactics or fads. That’s what our approach is all about: <br></br> universal performance marketing truths that stand the test of time and help you win.</span>
      <div className="skills__container container grid">
        <Frontend></Frontend>
        <Backend></Backend>
        <Callibrate/>
        <Evolve/>
      </div>
    </section>
  );
}
