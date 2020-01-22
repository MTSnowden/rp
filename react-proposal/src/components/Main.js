import React, { Component } from 'react'

class Main extends Component {
    componentDidMount() {
        console.log('Loading the Main component...')
    }
    render() {
        return (
            <div>
                <p>Main Page!</p>
            </div>
        )
    }
}

export default Main