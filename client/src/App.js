import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import SignUp from './auth/SignUp';
import Login from './auth/Login';
import UsersList from './components/UsersList';

import './App.css';

function App() {
	return (
		<div className='App'>
			<div>
				<NavLink to='/users'>Users</NavLink>
				<NavLink to='/signup'>SignUp</NavLink>
				<NavLink to='/login'>Login</NavLink>
			</div>
			<Route exact path='/users' component={UsersList} />
			<Route path='/signup' component={SignUp} />
			<Route path='/login' component={Login} />
		</div>
	);
}

export default App;
