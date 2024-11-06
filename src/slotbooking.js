import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SlotBooking = ({ selectedSlot }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send booking details to the backend
    navigate("/confirmation");
  };

  if (!selectedSlot) {
    return <p>Please select a slot first.</p>;
  }

  return (
    <div>
      <h2>Book Slot: {selectedSlot}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit" className="book-btn">Confirm Booking</button>
      </form>
    </div>
  );
};

export default SlotBooking;
