import React, { useState } from 'react';
import './styles.css';
import Login from './components/Login';
import AdminView from './components/AdminView';
import UserView from './components/UserView';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? (
        user.role === 'admin' ? <AdminView user={user} /> : <UserView user={user} />
      ) : (
        <Login onLogin={setUser} />
      )}
    </div>
  );
};

export default App;
