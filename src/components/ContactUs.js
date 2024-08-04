import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div>
          <h2>Contact Us</h2>
          <div className='contact-container'>
            <div className='contact-info'>
              <br></br>
              <h2>Stay Updated</h2>
              <br></br>
              <br></br>
              
              <p>Need to get in touch with us?</p>
              <br></br>
              
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
             
              <br></br>
            </div>
            <div className='contact-form'>
              <form>
                <br></br>
                <label>Name</label>
                <input type="text" value="user1" disabled/>
                <label>Email</label>
                <input type="email" value="user1@gmail.com" disabled />
                <label>What can we help you with?</label>
                <textarea></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
            
          </div>
        </div>
    );
};

export default ContactUs;
