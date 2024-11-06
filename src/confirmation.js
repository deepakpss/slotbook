import React from 'react';
import { useNavigate } from 'react-router-dom';

const Confirmation = ({ selectedSlot }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Booking Confirmed</h2>
      <p>Your slot for {selectedSlot} has been booked successfully.</p>
      <button className="back-btn" onClick={() => navigate("/")}>Go To Home</button>
    </div>
  );
};

export default Confirmation;
