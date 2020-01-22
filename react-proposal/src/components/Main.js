import React, { Component } from 'react'
import homeBanner from '../img/frontera-home.jpg'

class Main extends Component {
    componentDidMount() {
        console.log('Loading the Main component...')
    }
    render() {
        return (
            <div>
            <img className="home-banner" 
                 style={homeBannerStyle} 
                 src={homeBanner} />   
            </div>
        )
    
    }
    
}

const homeBannerStyle = {
    margin: '0px',
    padding: '0px',
    width: '100%', 
    backgroundColor: '#ffffff'
}

export default Main

