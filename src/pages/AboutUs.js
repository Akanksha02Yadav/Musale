import React, { useState } from 'react';

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="about-us" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <h2>About Us</h2>
      {/* Dropdown content */}
      <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
        <a href="#">Our Company</a>
        <a href="#">Our Strength</a>
      </div>
    </div>
  );
};

export default AboutUs;
