import React from 'react';
import './AdminProfile.css';
import  { FaEdit } from 'react-icons/fa';

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
          <input type="text" placeholder="Name" />
          <FaEdit className="edit-icon" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Email" />
          <FaEdit className="edit-icon" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Password" />
          <FaEdit className="edit-icon" />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" placeholder="Phone Number" />
          <FaEdit className="edit-icon" />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" placeholder="Address" />
          <FaEdit className="edit-icon" />
        </div>
        <div className='last-line' style={{display:'flex'}}>
          <div className="form-group half-width">
            <label>State</label>
            <input type="text" placeholder="State" />
          </div>
          <div className="form-group half-width">
            <label>Zip Code</label>
            <input type="text" placeholder="Zip Code" />
          </div>
         </div> 
      </div>
    </div>
  );
};

export default Profile;
