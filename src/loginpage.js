import React, { useState } from 'react';
import { auth, provider, signInWithPopup } from './firebase'; // Import Firebase config

const Login = ({ onAuthSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle email/password login (if needed)
    console.log('Email:', email);
    console.log('Password:', password);
    onAuthSuccess(); // Trigger login success
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Google User:', user);
      onAuthSuccess(); // Trigger login success
    } catch (error) {
      console.error('Google Sign-In Error', error);
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit" className="auth-btn">
          Login
        </button>
      </form>

      <div className="separator">
        <p>or</p>
      </div>

      <button className="auth-btn google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </>
  );
};

export default Login;
