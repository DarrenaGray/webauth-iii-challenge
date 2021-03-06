import React from 'react';
import axios from 'axios';

class SignUp extends React.Component {
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

	signUp = e => {
		e.preventDefault();
		axios
			.post('/auth/register', this.state) // Refer to requiresAuth component for base url
			.then(res => {
				localStorage.setItem('jwt', res.data.token);
				this.props.history.push('/users');
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	};

	render() {
		return (
			<div>
				<h2>Sign Up</h2>
				<form onSubmit={this.signUp}>
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
						<button type='submit'>Sign Up</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;
