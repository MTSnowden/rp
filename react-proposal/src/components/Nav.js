import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export default class Nav extends Component {
    render(){
        return (
            
                <div className="Nav-Container">
                    <ul>
                        <Link to='/Main'>Home</Link>
                        <Link to='/Training'>Training</Link>
                        <Link to='/User'>User Guide</Link>
                        <Link to='/Allocations'>Allocations</Link>
                        <Link to='/Fellowships'>Fellowships</Link>
                        <Link to='/News'>News</Link>
                        <Link to='/About'>About</Link>
                        <Link to='/Help'>Help</Link>
                    </ul>
                </div>
            
        )
    }
}


    


