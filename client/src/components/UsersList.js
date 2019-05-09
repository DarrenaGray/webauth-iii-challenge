import React from 'react';
import axios from 'axios';

class UsersList extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        console.log('Mounting users...')
        const baseUrl = 'http://localhost:4000/api'
        axios
            .get(`${baseUrl}/users`)
            .then(res => {
                console.log(res)
                this.setState({
                    users: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }


    render() {
        console.log('Rendering users...')
        return (
            <div>
                <h3>Users</h3>
                {this.state.users.map(user => (
                    <div key={user.id}>
                        <p>{user.username}</p>
                    </div>
                ))}

            </div>
        )
    }
}


export default UsersList;