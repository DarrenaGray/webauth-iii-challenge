import React from 'react';

class Login extends React.Component {
	state = {
		username: '',
		password: '',
	};

	handleChange = e => {
		const { id, value } = e.target;
		this.setState({
			[id]: value,
		});
	};

	render() {
		return (
			<div>
				<h2>Login</h2>
				<form action=''>
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
						<button type='submit'>Submit</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Login;
