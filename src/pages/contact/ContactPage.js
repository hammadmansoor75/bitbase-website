import React from 'react'
import './contactPage.css'
import ourServices from '../../assets/our_services.png'
import img1 from "../../assets/Contact/Group1.png";
import vector from "../../assets/Contact/Group.png";
import location from "../../assets/Contact/location.png";
import phone from "../../assets/Contact/phone.png";
import mail from "../../assets/Contact/mail.png";
const ContactPage = () => {
  return (
     <div className="uss">
      <div className="contacttt">
        <div className="us">
          <img src={vector}></img>
          <h1>
            <spna className="underlined">
              <span className="under">Contact Us</span>
            </spna>
          </h1>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br />
          Lorem Ipsum has been the industry's standard dummy text
        </p>
      </div>
      <div className="mainpage">
        <div className="left-div">
          <div>
            {" "}
            <img src={img1} alt=""></img>
          </div>
          <div className="contacts">
            <div className="details">
              {" "}
              <img src={location}></img>
              <p>
                <strong>Address: </strong>Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
              </p>
            </div>
            <div className="details">
              <img src={phone}></img>
              <p>(01) 0101-0101</p>
            </div>
            <div className="details">
              <img src={mail}></img>
              <p>info@youremail.org</p>
            </div>
          </div>
        </div>

        <div className="right-div">
          <div className="inputhead">
            {" "}
            <h1> Lorem Ipsum is simply dummy text</h1>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.printing and typesetting industry.
          </p>
          <div className="inputs-right">
            <p>
              Name<span className="imp">*</span>
            </p>
            <input type="text" />
            <p className='ptagg'>
              Email<span className="imp">*</span>
            </p>
            <input type="email" />
          </div>
          <p>
            Message<span className="imp">*</span>
          </p>
          <div className="largearea">
            <textarea></textarea>
          </div>

          <div className="contact-button">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
