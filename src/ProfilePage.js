import React from 'react';
import './ProfilePage.css'; // Create a separate CSS file for styling
import Navbar from './NavbarForProfile';

// Example user data (this will come from your backend/database)
const userData = {
  name: "Deepak",
  email: "deepakpss@gmail.com",
  phone: "+1234567890",
  profileImage: "https://media.istockphoto.com/id/1361217779/photo/portrait-of-happy-teenage-boy-at-park.jpg?s=612x612&w=0&k=20&c=yGHZLPu6UWwoj2wazbbepxmjl29MS1Hr2jV3N0FzjyI=", // Use an actual image URL or import the image
  slotsBooked: 10,
  timesPlayed: 8
};

const ProfilePage = () => {
  return (
    <>
    <Navbar/>
    <div className="profile-container">
      <div className="profile-card">
        {/* Top Part */}
        <div className="profile-header">
          <img className="profile-image" src={userData.profileImage} alt="User" />
          <div className="profile-details">
            <h2>{userData.name}</h2>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.phone}</p>
          </div>
        </div>
        {/* Bottom Part */}
        <div className="profile-stats">
          <div className="stat">
            <h3>{userData.slotsBooked}</h3>
            <p>Slots Booked</p>
          </div>
          <div className="stat">
            <h3>{userData.timesPlayed}</h3>
            <p>Times Played</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProfilePage;
