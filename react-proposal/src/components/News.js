import React, { Component } from 'react'

class News extends Component {
    componentDidMount() {
        console.log('Loading the News component...')
    }
    render() {
        return (
            <div>
                <p>News Page!</p>
            </div>
        )
    }
}

export default News