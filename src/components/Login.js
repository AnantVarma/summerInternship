import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import loginimg from '../Images/Login in page image.png'
import './Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('/users.json'); // Fetch users.json
      const users = response.data;
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        onLogin(user);
        navigate('/'); // Navigate to the home page or the respective route
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div>
      <h2 style={{fontSize:'40px'}}>B.planet</h2>
      <div className='login-container' >
        <div className="login-image" > <img src={loginimg} ></img></div>
   
        <div className="login-form">
          <h2>Login</h2>
          <br></br>
          <br></br>
          <br></br>
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
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <button type="submit">Login</button>
            <br></br>
            <br></br>
          </form>
        </div>
      </div>
      <div style={{border:'3px solid grey',margin:'60px 60px',borderRadius:'15px'}} >
        <h3 style={{color:'red'}}>*Note</h3>
        <h4>Details for loging--</h4><br></br>
        <div style={{display:'flex',msFlexDirection:'row',justifyContent:'space-evenly'}}>
          <div style={{border:'2px solid grey', padding:'10px',borderRadius:'10px'}}><h4>For Admin:-</h4>Email-admin@example.com<br></br>Password-admin123</div><br></br>
          <div style={{border:'2px solid grey', padding:'10px',borderRadius:'10px'}}><h4>For user:-</h4>Email-user1@example.com<br></br>Password-user123</div>
        </div>  
        <p style={{color:'red'}}>**For more details refer to users.json file in public folder</p>
       </div>
    </div>
  );
};

export default Login;


