import React from 'react';
import axios from 'axios';

class Login extends React.Component {
	state = {
		username: '',
		password: ''
	};

	handleChange = e => {
		const { id, value } = e.target;
		this.setState({
			[id]: value
		});
	};

	login = e => {
		e.preventDefault();
		axios
			.post(`/auth/login`, this.state) // Refer to requiresAuth component for base url
			.then(res => {
				console.log(res);
				localStorage.setItem('jwt', res.data.token);
				this.props.history.push('/users');
			})
			.catch(err => {
				console.log(err);
			});
	};

	render() {
		return (
			<div>
				<h2>Login</h2>
				<form onSubmit={this.login}>
					<div>
						<label htmlFor='username' />
						<input
							type='text'
							id='username'
							onChange={this.handleChange}
							value={this.state.username}
						/>
					</div>
					<div>
						<label htmlFor='password' />
						<input
							type='password'
							id='password'
							onChange={this.handleChange}
							value={this.state.password}
						/>
					</div>
					<div>
						<button type='submit'>Login</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Login;
