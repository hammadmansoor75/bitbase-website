import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_zixmlum',
      'template_hwa4hjh',
      form.current,
      'nJrseEA6LFkfG6DsQ'
    );
    e.target.reset();
  };
  return (
    <section className="contact section" id="contact">
      <div className='contact_flex'>
      <h2 className="section__title contact_title">Ready to talk digital? </h2>
      <button className='button button_contact'>Get Started With a Free Audit</button>
      </div>
      
    </section>
  );
}
