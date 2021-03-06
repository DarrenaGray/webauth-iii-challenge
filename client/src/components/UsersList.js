import React from 'react';
import axios from 'axios';

import requiresAuth from '../auth/requiresAuth';

class UsersList extends React.Component {
	state = {
		users: []
	};

	logout = () => {
		localStorage.removeItem('jwt');
		this.props.history.push('/login');
	};

	componentDidMount() {
		console.log('Mounting users...');
		axios
			.get('/users') // Refer to requiresAuth component for base url
			.then(res => {
				console.log(res);
				this.setState({
					users: res.data
				});
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		console.log('Rendering users...');
		return (
			<div className='usersList'>
				<h3>Users</h3>
				{this.state.users.map(user => (
					<div className='userInfo' key={user.id}>
						<p>{user.username}</p>
					</div>
				))}
				<button onClick={this.logout}>Logout</button>
			</div>
		);
	}
}

export default requiresAuth(UsersList);
