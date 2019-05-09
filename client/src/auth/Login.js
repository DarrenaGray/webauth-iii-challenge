import React from 'react';

class Login extends React.Component {
	state = {
		username: '',
		password: '',
	};

	render() {
		return (
			<div>
				<h2>Login</h2>
				<form action=''>
					<div>
						<label
							htmlFor='username'
							id='username'
							onChange={this.handleChange}
							value={this.state.username}
						/>
						<input type='text' />
					</div>
					<div>
						<label
							htmlFor='password'
							id='password'
							onChange={this.handleChange}
							value={this.state.password}
						/>
						<input type='text' />
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
