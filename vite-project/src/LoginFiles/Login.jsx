import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Here you can implement your authentication logic.
    // For simplicity, I'll just check if both username and password are not empty.
    if (username && password) {
      setLoggedIn(true);
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className="login-container">
      {loggedIn ? (
        <div>
          <h1>Welcome, {username}!</h1>
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Username/Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
          <div className="remember-me">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label>Remember me</label>
          </div>
          <button className="login-btn" onClick={handleLogin}>Login</button>
          <div className="google-signin">
            <button className="google-btn">Sign in with Google</button>
          </div>
          <div className="register-link">
            <p>Don't have an account? <a href="#">Register now</a></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
