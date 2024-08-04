import React, { useState } from 'react';
import loginimg from '../Images/Login in page image.png'
import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await fetch('/users.json');
    const users = await response.json();
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      onLogin(user);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
         <h2 style={{fontSize:'40px'}}>B.planet</h2>
        <div className="login-container" style={{marginTop:'40px'}}>
          <div className="login-image"> <img src={loginimg} ></img></div>
          <div  className="login-form">
          <h2 >Login</h2>
          <br></br>
          <br></br>
          <br></br>
          <div style={ {display:'flex',flexDirection:'column'} }>
              <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} /><br></br><br></br>
              <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br></br><br></br>
              <button onClick={handleLogin}>Login</button><br></br><br></br><br></br>
          </div>
        </div>
      </div>
       <div style={{border:'4px solid black',margin:'60px 60px'}} >
        <h3 style={{color:'red'}}>*Note</h3>
        <h4>Details for loging--</h4><br></br>
        <div style={{display:'flex',msFlexDirection:'row',justifyContent:'space-evenly'}}>
          <div style={{border:'2px solid grey', padding:'10px',borderRadius:'10px'}}><h4>For Admin:-</h4>UserName-admin<br></br>Password-admin123</div><br></br>
          <div style={{border:'2px solid grey', padding:'10px',borderRadius:'10px'}}><h4>For user:-</h4>UserName-user1<br></br>Password-user123</div>
        </div>  
        <p style={{color:'red'}}>**For more details refer to users.json file in public folder</p>
       </div>
    </div>
  );
};

export default Login;
