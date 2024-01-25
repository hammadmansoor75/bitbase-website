import React from 'react'
import './servicesPage.css'
import ourServices from '../../assets/our_services.png'
const ServicesPage = () => {
  return (
    <section className='section'>
      <div className='services_page_container'>
        <div className='content_section'>
          <h1 className='main_heading'>Our <span className='heading_span'>Services</span> </h1>
        </div>
        <div className='image_section'>
          <img className='our_services_image' src={ourServices} alt='our_services'></img>
        </div>
      </div>

      <div className='services section'>
        <div className='content'>
          <h1>We provide awesome services</h1>
          <p>lorem</p>
        </div>
      </div>
    </section>
  )
}

export default ServicesPage
