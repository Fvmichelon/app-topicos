import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Here you can implement your registration logic.
    // For simplicity, I'll just log the form data.
    console.log({
      username,
      email,
      phoneNumber,
      password,
      confirmPassword,
    });
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Username (optional)"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email (mandatory)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone Number (optional)"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button className="register-btn" onClick={handleRegister}>Register</button>
      <div className="google-signin">
        <button className="google-btn">Sign up with Google</button>
      </div>
    </div>
  );
};

export default Register;
