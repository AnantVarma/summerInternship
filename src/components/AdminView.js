import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';

import ProductTable from './ProductTable';
import ProductDetail from './AdminProductDetail';
import ContactUs from './AdminContactUs';
import Profile from './AdminProfile';
import './AdminView.css';

const UserView = ({ user }) => {
  return (
    <div className="app">
      <header>
        <h1>B.planet</h1>
        <nav className='navbutton' style={{ marginTop: '2%' }}>
          <NavLink to="/" activeClassName="active" style={{ border: '2px solid black', padding: '3px', marginRight: '10px', textDecoration: 'none', borderRadius: '12px' }}>Home</NavLink>
          <NavLink to="/contact" activeClassName="active" style={{ border: '2px solid black', padding: '3px', marginRight: '10px', textDecoration: 'none', borderRadius: '12px' }}>Contact Us</NavLink>
          <NavLink to="/profile" activeClassName="active" style={{ border: '2px solid black', padding: '3px', marginRight: '10px', textDecoration: 'none', borderRadius: '12px' }}>Profile</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ProductTable />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default UserView;

