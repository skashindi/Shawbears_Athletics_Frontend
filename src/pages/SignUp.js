import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';
import Login from './Login';
import './SignUp.css';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch('http://localhost:9000/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        alert('Signup successful');
      } else {
        alert('Signup failed');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Signup failed');
    }
  };


  return (
    <div class="form-container">
                <img src="../images/city.jpg" alt="Shaw App Logo" />
                <h2>Shaw Athletics</h2>
      <form className="signup-form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <div className="input-group">
          <input
            type="name"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
        
      </form>
      <div container="links" >
            <p >Already a member login<a href="/login">Login</a></p>
        </div>
    </div>
  );
}

export default SignUp;