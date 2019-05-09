import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import Login from './auth/Login';
import UsersList from './components/UsersList';

import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <NavLink to='/'>Users</NavLink>
      </div>
      <Route path='/' component={UsersList} />
      <Route path='/' component={Login} />

    </div>
  );
}

export default App;
