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
		const baseUrl = 'http://localhost:4000/api';
		axios
			.post(`${baseUrl}/auth/login`, this.state)
			.then(res => {
				localStorage.setItem('jwt', res.data.token);
				console.log(res);
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
