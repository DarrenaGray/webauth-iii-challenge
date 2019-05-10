import React from 'react';

export default function(Component) {
	return class Authenticated extends React.Component {
		render() {
			const token = localStorage.getItem('jwt');
			const notLoggedIn = <h3>Please login to see the users</h3>;

			return token ? <Component {...this.props} /> : notLoggedIn;
		}
	};
}
