import React, { useState } from 'react';
import axios from 'axios';
import './contactPage.css';
import img1 from "../../assets/Contact/Group1.png";
import vector from "../../assets/Contact/Group.png";
import location from "../../assets/Contact/location.png";
import phone from "../../assets/Contact/phone.png";
import mail from "../../assets/Contact/mail.png";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/send', formData);
      console.log(response.data);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message.');
    }
  };

  return (
    <div className="uss">
      <div className="contacttt">
        <div className="us">
          <img src={vector} alt="Vector"></img>
          <h1>
            <span className="underlined">
              <span className="under">Contact Us</span>
            </span>
          </h1>
        </div>
        <p className='oline'>
        Whether you're a crypto novice or a seasoned trader, our team is ready to assist you with your digital currency needs..
          
        </p>
      </div>
      <div className="mainpage">
        <div className="left-div">
          <div>
            <img src={img1} alt="Group"></img>
          </div>
          <div className="contacts">
            <div className="details">
              <img src={location} alt="Location"></img>
              <p>
                <strong>Address: </strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
            <div className="details">
              <img src={phone} alt="Phone"></img>
              <p>(01) 0101-0101</p>
            </div>
            <div className="details">
              <img src={mail} alt="Mail"></img>
              <p>info@youremail.org</p>
            </div>
          </div>
        </div>
        <div className="right-div">
          <div className="inputhead">
            <h1>Get in Touch with the BitBase Team</h1>
          </div>
          <p>
          Contact us for more details and get customized marketing strategies tailored for
          flourishing your project.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="inputs-right">
              <p>Name<span className="imp">*</span></p>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <p className='ptagg'>
                Email<span className="imp">*</span>
              </p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <p>Message<span className="imp">*</span></p>
            <div className="largearea">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="contact-button">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
