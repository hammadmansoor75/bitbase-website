import React from 'react';
import './qualification.css';
import bitcoin from '../../assets/bitcoin.jpg'
import { BsSpeedometer } from "react-icons/bs";
import { LuBinary } from "react-icons/lu"
import { FcAdvertising } from "react-icons/fc";
import { FaDollarSign } from "react-icons/fa";
import { MdDoorSliding } from "react-icons/md";
import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
export default function Qualification() {
  useEffect(() => {
    const items = document.querySelectorAll('.inner_item');

    const animateItems = () => {
      anime({
        targets: items,
        opacity: [0, 1],
        translateY: [-20, 0], // Change the translateY property to animate upward
        delay: anime.stagger(200), // Adjust the delay between items
        easing: 'easeInOutQuad',
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateItems();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    items.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      items.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section className="qualification section">
      <div className='main_container'>
        <div className='left_container'>
          <img src={bitcoin} alt='btc' className='picture'></img>
          <h3 className='left_heading'>Refining Marketing Excellence: Our Core Principles</h3>
          <p className='left_content'>Embark on a journey of success guided by our meticulously crafted principles, the
foundation of strategies that propel your project to new heights.</p>
        </div>
        <div className='right_container'>
          <div className='inner_container'>
            <div className='inner_item'> 
              <BsSpeedometer className='inner_logo' />
              <div className='inner_content'>
                <h2 className='inner_heading'>Strategic Momentum</h2>
                <p className='inner_subheading'>Identify and reallocate resources efficiently, propelling your venture forward. Optimize
your budget strategically for immediate impact, creating a ripple effect of success.</p>
              </div>
            </div>
            <div className='inner_item'>
              <LuBinary className='inner_logo' />
              <div className='inner_content'>
                <h2>Precision in Data Management</h2>
                <p>Precision reigns supreme. Base your decisions on clean, accurate, and comprehensive data—a non-negotiable foundation for every successful campaign.</p>
              </div>
            </div>
            <div className='inner_item'>
              <FcAdvertising className='inner_logo' />
              <div className='inner_content'>
                <h2>The 80/20 Rule for Triumph</h2>
                <p>Decipher the pivotal 20% generating 80% of results. Delve into strategic elements, amplifying performance for maximum impact.</p>
              </div>
            </div>
            <div className='inner_item'>
              <FaDollarSign className='inner_logo' />
              <div className='inner_content'>
                <h2>Mastering Revenue Generation (MRG)</h2>
                <p>Beyond flashy tactics, we prioritize the meticulous refinement and testing of campaigns.Our focus lies not only in captivating audiences.</p>
              </div>
            </div>
            <div className='inner_item'>
             <MdDoorSliding className='inner_logo' />
              <div className='inner_content'>
                <h2>Unleashing Untapped Potential</h2>
                <p>Challenge the norms. No matter your campaign's success, there is always room for growth. Proactively research, test, and evolve to unlock unprecedented levels of success.</p>
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </section>
  );
}
