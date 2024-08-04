import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles.css';
import Login from './components/Login';
import AdminView from './components/AdminView';
import UserView from './components/UserView';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? (
        <Routes>
          <Route path="/*" element={user.role === 'admin' ? <AdminView user={user} /> : <UserView user={user} />} />
        </Routes>
      ) : (
        <Login onLogin={setUser} />
      )}
    </div>
  );
};

export default App;

