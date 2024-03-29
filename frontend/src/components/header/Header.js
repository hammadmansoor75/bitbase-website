import React, { useState } from 'react';
import './header.css';
import mainlogo from '../../assets/mainlogo-removebg.png'
import { Link } from 'react-router-dom';
export default function Header() {
  /* Change Background Header */
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('show-header');
  });
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          <img src = {mainlogo} className='mainlogo' alt='logo' ></img>
        </Link>

        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link
                to ="/"
                onClick={() => setActiveNav('#home')}
                className={
                  activeNav === '#home' ? 'nav__link active-link' : 'nav__link'
                }
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/about"
                onClick={() => setActiveNav('#about')}
                className={
                  activeNav === '#about' ? 'nav__link active-link' : 'nav__link'
                }
              >
                <i className="uil uil-user nav__icon"></i> About
              </Link>
            </li>


            <li className="nav__item">
              <Link
                to="/services"
                onClick={() => setActiveNav('#services')}
                className={
                  activeNav === '#services'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </Link>
            </li>

           

            <li className="nav__item rounded-btn">
              <Link
                to="/contact"
                onClick={() => setActiveNav('#contact')}
                className={
                  activeNav === '#contact'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className="uil uil-message nav__icon"></i> Book a Call?
              </Link>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}
