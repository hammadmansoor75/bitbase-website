import React from 'react'
import './servicesPage.css'
import ourServices from '../../assets/our_services.png'
import service from '../../assets/service.JPG'
import { FcServices } from "react-icons/fc";
import { BsCashStack } from "react-icons/bs";
import { FcOnlineSupport } from "react-icons/fc";
import { FcAdvertising } from "react-icons/fc";
import { MdChecklist } from "react-icons/md";
import { FcManager } from "react-icons/fc";
import { TbSocial } from "react-icons/tb";

const ServicesPage = () => {
  return (
    <section className='section'>
      <div className='services_page_container'>
        <div className='content_section'>
          <h1 className='main_heading'>Our <span className='heading_span'>Services</span> </h1>
          <p>
          We offer comprehensive marketing solutions for blockchain startups, ranging from Digital marketing to PR & KOLs campaigns across the globe. Boost your blockchain project's visibility and engagement with our comprehensive digital marketing services. From targeted campaigns to strategic content creation, we tailor our approach to amplify your brand in the digital landscape. Our team harnesses the power of online platforms to connect with your target audience, drive conversions, and build lasting brand recognition.
          </p>
        </div>
        <div className='image_section'>
          <img className='our_services_image' src={ourServices} alt='our_services'></img>
        </div>
      </div>

      <div className='services section'>
        <div className='content'>
          <h1>We provide awesome services</h1>
          <p>
"Empower your crypto journey with our cutting-edge services, providing excellence at every transaction. Explore the future of finance with us – where innovation meets seamless functionality."</p>
        </div>

        <div className='cards'>
          <div className='service_card'>
            <BsCashStack className='service_card_icon' />
            
            <div className='service_card_content'>
              <h1>VC Funding</h1>
              <p>Coming Soon!!</p>
            </div>
          </div>

          <div className='service_card'>
          <FcOnlineSupport className='service_card_icon' />
            
            <div className='service_card_content'>
              <h1>Advisors</h1>
              <p>BitBase advisory will open ways for flourishing your business. It will help you in
opening ways for CEXs listings and many more avenues to improve your startup.</p>
            </div>
          </div>

          <div className='service_card'>
          <MdChecklist className='service_card_icon' />
            
            <div className='service_card_content'>
              <h1>CEXs Listing</h1>
              <p>BitBase has partnered with Tier 1 CEXs. Our team will help you in getting listed on
Tier 1 CEX. Get in touch and discuss with our team.</p>
            </div>
          </div>

          <div className='service_card'>
          <FcAdvertising className='service_card_icon' />
            
            <div className='service_card_content'>
              <h1>Marketing</h1>
              <p>We offer comprehensive marketing solutions for blockchain startups, ranging from
Digital marketing to PR & KOLs campaigns across the globe.</p>
            </div>
          </div>

          <div className='service_card'>
          <FcServices className='service_card_icon' />
            
            <div className='service_card_content'>
              <h1>Developers / Technical Support</h1>
              <p>Our team of top notch developers will open ways for improvements and further
development for your startup.</p>
            </div>
          </div>

          <div className='service_card'>
          <FcManager className='service_card_icon' />
            
            <div className='service_card_content'>
              <h1>Branding & Narrative Building</h1>
              <p>service description</p>
            </div>
          </div>

          
          <div className='service_card'>
          <TbSocial className='service_card_icon' />
            
            <div className='service_card_content'>
              <h1>Social Media Marketing</h1>
              <p>service description</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesPage
