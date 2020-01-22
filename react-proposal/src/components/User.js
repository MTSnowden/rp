import React, { Component } from 'react'

class User extends Component {
    componentDidMount() {
        console.log('Loading the User component...')
    }
    render() {
        return (
            <div>
                <p>User Portal!!</p>
            </div>
        )
    }
}

export default User