import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import ProductTable from './ProductTable';
import ProductDetail from './ProductDetail';
import ContactUs from './ContactUs';
import Profile from './Profile';
import './UserView.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <header>
                    <h1>B.planet</h1>
                    <nav className='navbutton'style={{marginTop:'2%'}} >
                        <NavLink to="/"  activeClassName="active" style={{border:'2px solid black',padding:'3px',marginRight:'10px',textDecoration:'none',borderRadius:'12px'}}>Home</NavLink>
                        <NavLink to="/contact" activeClassName="active"  style={{border:'2px solid black',padding:'3px',marginRight:'10px',textDecoration:'none',borderRadius:'12px'}}>Contact Us</NavLink>
                        <NavLink to="/profile" activeClassName="active"  style={{border:'2px solid black',padding:'3px',marginRight:'10px',textDecoration:'none',borderRadius:'12px'}}>Profile</NavLink>
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
        </Router>
    );
};

export default App;
