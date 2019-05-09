import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import UsersList from './components/UsersList';

import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <NavLink to='/'>Users</NavLink>
      </div>
      <Route path='/' component={UsersList} />

    </div>
  );
}

export default App;
