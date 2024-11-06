import React, { useState } from 'react';
import { auth, provider, signInWithPopup } from './firebase'; // Import Firebase config

const Signup = ({ onAuthSuccess }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Validate the form (e.g., check if passwords match)
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Handle form-based sign-up (you can add Firebase email/password signup logic here)
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    onAuthSuccess(); // Trigger signup success (to be customized later)
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Google User:', user);
      onAuthSuccess(); // Trigger signup success (you can modify this for further actions)
    } catch (error) {
      console.error('Google Sign-In Error', error);
    }
  };

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={handleFullNameChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirm your password"
            required
          />
        </div>
        <button type="submit" className="auth-btn">Sign Up</button>
      </form>

      <div className="separator">
        <p>or</p>
      </div>

      <button className="auth-btn google-btn" onClick={signInWithGoogle}>
        Sign up with Google
      </button>
    </>
  );
};

export default Signup;
