import React from 'react';
import './Profile.css';

import prabhas from '../Images/prabhas.JPG'

const Profile = () => {
    return (
        <div className="about-container">
          <div className="about-header">
            <img src={prabhas} alt="User" className="profile-pic" />
            <h1>B.planet</h1>
          </div>
          <div className="about-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" value="user1" disabled/>
              
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" value="user1@gmail.com" disabled/>
              
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" value="*******" disabled/>
             
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" value="0987654321"disabled />
             
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" value="Visakhapatnam" disabled />
              
            </div>
            <div className='last-line' style={{display:'flex'}}>
              <div className="form-group half-width">
                <label>State</label>
                <input type="text" value="Andhra pradesh" disabled />
              </div>
              <div className="form-group half-width">
                <label>Zip Code</label>
                <input type="text" value="67890" disabled/>
              </div>
             </div> 
          </div>
        </div>
      );
};

export default Profile;
