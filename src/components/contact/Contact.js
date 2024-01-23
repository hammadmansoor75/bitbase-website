import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { animateScroll as scroll } from 'react-scroll'; // Import the animateScroll function
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

  const handleAnimation = () => {
    const title = document.querySelector('.contact_title');
    const button = document.querySelector('.button_contact');

    if (title && button) {
      const titleOffset = title.offsetTop;
      const buttonOffset = button.offsetTop;

      const scrollOffset = window.scrollY + window.innerHeight;

      if (scrollOffset > titleOffset) {
        title.classList.add('animated');
      }

      if (scrollOffset > buttonOffset) {
        button.classList.add('animated');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleAnimation);
    return () => {
      window.removeEventListener('scroll', handleAnimation);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <section className="contact section" id="contact">
      <div className='contact_flex'>
        <h2 className="section__title contact_title">Ready to talk digital? </h2>
        <button className='button button_contact' onClick={scrollToTop}>
          Get Started With a Free Audit
        </button>
      </div>
    </section>
  );
}
