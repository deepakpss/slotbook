import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import "./home.css"
const HomePage = () => {
    const images = [
        "https://github.com/deepakpss/demo/blob/main/WhatsApp%20Image%202024-10-21%20at%207.25.22%20PM.jpeg?raw=true",
        "https://github.com/deepakpss/demo/blob/main/WhatsApp%20Image%202024-10-21%20at%207.25.21%20PM.jpeg?raw=true",
        "https://github.com/deepakpss/demo/blob/main/WhatsApp%20Image%202024-10-21%20at%207.25.21%20PM%20(1).jpeg?raw=true"
      ];
      const [currentIndex, setCurrentIndex] = useState(0);
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // 5000ms = 5 seconds
    
        return () => clearInterval(intervalId); // Cleanup interval on component unmount
      }, [images.length]);
    
  return (
    <>
    <Navbar/>
    <div
      className="background-carousel"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="overlay">
        <h1>Welcome to Badminton Slot Booking</h1>
        <p>Book your court easily and quickly!</p>
      </div>
    </div>
    </>
  );
};


export default HomePage;
