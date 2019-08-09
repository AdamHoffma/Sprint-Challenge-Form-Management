import React from 'react'

class User extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <p>UserName: {this.props.username}</p>
        )
    }
}

export default User
