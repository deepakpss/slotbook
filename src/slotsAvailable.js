import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SlotList.css'; // Import CSS file

const SlotList = ({ setSelectedSlot }) => {
  const slots = ["9:00 AM - 10:00 AM", "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "12:00 PM - 1:00 PM"];
  const navigate = useNavigate();

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
    navigate("/book");
  };

  return (
    <div className="slot-container">
      <h2 className="slot-header">Available Slots</h2>
      <ul className="slot-list">
        {slots.map((slot, index) => (
          <li 
            key={index} 
            onClick={() => handleSlotSelection(slot)} 
            className="slot-item"
          >
            {slot}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlotList;
