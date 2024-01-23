import React from 'react';
import './footer.css';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container footer">
        <h1 className="footer__title">BitBase</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="https://www.instagram.com/" className="footer__social-link">
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="https://dribbble.com/" className="footer__social-link">
            <i class="bx bxl-dribbble"></i>
          </a>
          <a href="https://github.com/" className="footer__social-link">
            <i class="bx bxl-github"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Bitbase. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
