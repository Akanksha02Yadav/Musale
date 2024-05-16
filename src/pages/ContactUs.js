import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [inquiry, setInquiry] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContactNumberChange = (e) => {
    setContactNumber(e.target.value);
  };

  const handlePinCodeChange = (e) => {
    setPinCode(e.target.value);
  };

  const handleInquiryChange = (e) => {
    setInquiry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
  };

  return (
    <div>
      <img src="/Assets/contact-us-banner.jpg" alt="Contact Us" style={{ width: '100%', height: '300px' }} />
      <div style={{ marginTop: '50px', marginRight: '50px', marginLeft: '50px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '400px', marginRight: '50px' }}>
          <div style={{ margin: 'auto', padding: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '15px' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', color: '#f90' }}>Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Enter your name"
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #f90' }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', color: '#f90' }}>Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #f90' }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label htmlFor="contactNumber" style={{ display: 'block', marginBottom: '5px', color: '#f90' }}>Contact Number:</label>
                <input
                  type="tel"
                  id="contactNumber"
                  value={contactNumber}
                  onChange={handleContactNumberChange}
                  placeholder="Enter your contact number"
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #f90' }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label htmlFor="pinCode" style={{ display: 'block', marginBottom: '5px', color: '#f90' }}>Pin Code:</label>
                <input
                  type="text"
                  id="pinCode"
                  value={pinCode}
                  onChange={handlePinCodeChange}
                  placeholder="Enter your pin code"
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #f90' }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label htmlFor="inquiry" style={{ display: 'block', marginBottom: '5px', color: '#f90' }}>Inquiry:</label>
                <textarea
                  id="inquiry"
                  value={inquiry}
                  onChange={handleInquiryChange}
                  placeholder="Enter your inquiry"
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #f90' }}
                ></textarea>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button type="submit" style={{ width: '100%', backgroundColor: '#f90', color: '#fff', padding: '10px 20px', border: '1px solid #f90', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}>Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <div style={{ padding: '20px', fontSize: '16px' }}>
            <h3 style={{ marginBottom: '10px', color: '#333' }}>REGISTERED OFFICE:</h3>
            <p>Musale Construction</p>
            <p>( CIN:                 )</p>
            <p>Musale Construction ,Bhagyashree Apartment,</p>
            <p>Trimurti Nagar,Nagpur-440022 </p>
            <p>India.</p>
            <p>Ph: +91 9881104515</p>
            <p>Ph: +91 9823102625</p>
            <p>Email: musale.construction@rediffmail.com</p>
          </div>
          <a href="https://maps.app.goo.gl/1FYnVCNBdRM7uDBa6" target="_blank">
            <img src="/Assets/location.png" alt="Location" style={{ width: '600px', height: '300px', marginRight: '10px' }} />
          </a>
        </div>
      </div>
      <div style={{ backgroundColor: 'black', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ textAlign: 'center', fontSize: '14px', color: 'white' }}>
          © Copyright 2024 | Musale Construction
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
