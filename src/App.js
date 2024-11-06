import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from './loginpage';   // Login Component
import Signup from './signup';     // Signup Component
import SlotList from "./slotsAvailable";
import SlotBooking from "./slotbooking";
import Confirmation from "./confirmation";
import HomePage from "./home";
import './App.css';
import Friends from './Friends';
import Logout from './Logout';
import Navbar from "./NavbarForProfile";
import ProfilePage from "./ProfilePage";

const App = () => {
  const [isSignUp, setIsSignUp] = useState(false);    // To toggle between login and signup
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // To track if user is authenticated
  const [selectedSlot, setSelectedSlot] = useState(null); // Track the selected slot for booking

  // Toggle between login and signup modes
  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
  };

  // Handle authentication success after login or signup
  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="app-container">
        {!isAuthenticated ? (
            <>   

          <div className="auth-container">
            
            <div className="auth-box">
              {/* Conditionally render Signup or Login component */}
              {isSignUp ? (
                <Signup onAuthSuccess={handleAuthSuccess} />
              ) : (
                <Login onAuthSuccess={handleAuthSuccess} />
              )}
              {/* Toggle between Signup and Login */}
              <div className="toggle-mode">
                {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                <span onClick={toggleAuthMode}>
                  {isSignUp ? "Login here" : "Sign up here"}
                </span>
              </div>
            </div>
          </div>
          </> 
        ) : (
          <>
            {/* <h1>Slot Booking System</h1> */}
            {/* <Navbar/> */}
            <Routes>
              {/* Slot Booking System Routes */}
              <Route path="/list" element={<SlotList setSelectedSlot={setSelectedSlot} />} />
              <Route path="/book" element={<SlotBooking selectedSlot={selectedSlot} />} />
              <Route path="/confirmation" element={<Confirmation selectedSlot={selectedSlot} />} />
              {/* <Route path="*" element={<Navigate to="/list" />} /> */}
                <Route path="/" element={<HomePage />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/ProfilePage" element={<ProfilePage />} /> {/* Your profile page */}
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
