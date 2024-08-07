import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginimg from '../Images/Login in page image.png';
import users from '../data/users.json';
import './Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      onLogin(user);
      navigate('/'); // Navigate to the home page or the respective route
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2 style={{ fontSize: '40px' }}>B.planet</h2>
      <div className='login-container'>
        <div className="login-image">
          <img src={loginimg} alt="Login" />
        </div>
        <div className="login-form">
          <h2>Login</h2>
          <br />
          <br />
          <br />
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <br />
            <br />
            <button type="submit">Login</button>
            <br />
            <br />
          </form>
        </div>
      </div>
      <div style={{ border: '3px solid grey', margin: '60px 60px', borderRadius: '15px' }}>
        <h3 style={{ color: 'red' }}>*Note</h3>
        <h4>Details for logging in:</h4>
        <br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <div style={{ border: '2px solid grey', padding: '10px', borderRadius: '10px' }}>
            <h4>For Admin:</h4>
            Email: admin@example.com
            <br />
            Password: admin123
          </div>
          <div style={{ border: '2px solid grey', padding: '10px', borderRadius: '10px' }}>
            <h4>For User:</h4>
            Email: user1@example.com
            <br />
            Password: user123
          </div>
        </div>
        <p style={{ color: 'red' }}>**For more details refer to users.json file in the src/data folder</p>
      </div>
    </div>
  );
};

export default Login;
