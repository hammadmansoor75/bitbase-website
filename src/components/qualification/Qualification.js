import React from 'react';
import './qualification.css';
import btc from '../../assets/btc.jpg'
import { BsSpeedometer } from "react-icons/bs";
import { LuBinary } from "react-icons/lu"
import { FcAdvertising } from "react-icons/fc";
import { FaDollarSign } from "react-icons/fa";
import { MdDoorSliding } from "react-icons/md";
export default function Qualification() {
  return (
    <section className="qualification section">
      <div className='main_container'>
        <div className='left_container'>
          <img src={btc} alt='btc' className='picture'></img>
          <h1 className='left_heading'>Our digital principles</h1>
          <p className='left_content'>It doesn’t matter if you’re buying media or earning it through SEO and content. Following these 5 undying principles is the secret ingredient to our clients’ success. Ignore these at your peril.</p>
        </div>
        <div className='right_container'>
          <div className='inner_container'>
            <div className='inner_item'> 
              <BsSpeedometer className='inner_logo' />
              <div className='inner_content'>
                <h2 className='inner_heading'>First, move the needle</h2>
                <p className='inner_subheading'>Fact: you’re probably wasting (a lot of) money somewhere. Find that waste, cut it and reallocate to what’s working right now. Increase your results immediately and create momentum.</p>
              </div>
            </div>
            <div className='inner_item'>
              <LuBinary className='inner_logo' />
              <div className='inner_content'>
                <h2>Get the data tight</h2>
                <p>Your inputs determine your outputs. Good data = good decisions. And good decisions = good results. Clean, accurate and complete data is the linchpin of any winning campaign.</p>
              </div>
            </div>
            <div className='inner_item'>
              <FcAdvertising className='inner_logo' />
              <div className='inner_content'>
                <h2>80/20 marketing</h2>
                <p>20% of your marketing efforts lead to 80% of your results. Identify the leverage points in your 20% and focus efforts there for the biggest gains in performance.</p>
              </div>
            </div>
            <div className='inner_item'>
              <FaDollarSign className='inner_logo' />
              <div className='inner_content'>
                <h2>Revenue-generating activities</h2>
                <p>Or RGAs for short. Marketing’s not just about sexy ideas and tactics. Do the hard work of refining and testing your campaigns. Over time, you’ll beat your shiny object-chasing competitors.</p>
              </div>
            </div>
            <div className='inner_item'>
             <MdDoorSliding className='inner_logo' />
              <div className='inner_content'>
                <h2>There’s always another level</h2>
                <p>No matter how well a campaign or ad is doing, it can do better. Proactively research, test and evolve. You’ll unlock shocking new levels of growth and scale</p>
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </section>
  );
}
