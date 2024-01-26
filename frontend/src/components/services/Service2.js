import React, { useState } from 'react';
import './services.css';
import { BsCashStack } from 'react-icons/bs';
import { FcAdvertising, FcManager, FcOnlineSupport, FcServices } from 'react-icons/fc';
import { MdChecklist } from 'react-icons/md';
import { TbSocial } from 'react-icons/tb';
export default function Service2() {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="services__title">Services</h2>
      <span className="services__subtitle">What we offer to our customers</span>

      <div className='cards'>
          <div className='service_card'>
            <BsCashStack className='service_card_icon' />
            
            <div className='service_card_content'>
              <h1>VC Funding</h1>
            
            </div>
          </div>

          <div className='service_card'>
          <FcOnlineSupport className='service_card_icon' />
            
            <div className='service_card_content'>
              <h1>Advisors</h1>
              
            </div>
          </div>

          <div className='service_card'>
          <MdChecklist className='service_card_icon' />
            
            <div className='service_card_content'>
              <h1>CEXs Listing</h1>
              
            </div>
          </div>

          <div className='service_card'>
          <FcAdvertising className='service_card_icon' />
            
            <div className='service_card_content'>
              <h1>Marketing</h1>
              
            </div>
          </div>

          <div className='service_card'>
          <FcServices className='service_card_icon' />
            
            <div className='service_card_content'>
              <h1>Developers / Technical Support</h1>
              
            </div>
          </div>

          <div className='service_card'>
          <FcManager className='service_card_icon' />
            
            <div className='service_card_content'>
              <h1>Branding & Narrative Building</h1>
              
            </div>
          </div>

          
          <div className='service_card'>
          <TbSocial className='service_card_icon' />
            
            <div className='service_card_content'>
              <h1>Social Media Marketing</h1>
            </div>
          </div>
        </div>
     
    </section>
  );
}
