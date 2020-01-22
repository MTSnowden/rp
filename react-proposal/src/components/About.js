import React, { Component } from 'react'

class About extends Component {
    componentDidMount() {
        console.log('Loading the About component...')
    }
    render() {
        return (
            <div>
                <p>About Page!</p>
            </div>
        )
    }
}

export default About