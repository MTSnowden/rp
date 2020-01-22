import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NSF from '../img/nsf-White.png'
import TACC from '../img/TACC-logo.png'
import FRONTERA from '../img/Frontera-White-Solo.png'



export default class Nav extends Component {
    render(){
        return (
            
                <div className="navbar-nav bg-dark">
                    
                    <nav className="navbar-nav"> 

                        <div className="navbar-header">
                        <a href="https://www.nsf.gov/" className="navbar-left">
                            <img
                                alt=""
                                src={NSF}
                                width="40"
                                height="40"
                                className="d-inline-block align-top"
                            />
                        </a>

                        <a href="https://www.tacc.utexas.edu" className="navbar-left">
                            <img
                                alt=""
                                src={TACC}
                                width=""
                                height="26"
                                className="d-inline-block align-top"
                            />
                        </a>
                        <a href="/" className="navbar-left">
                            <img
                                alt=""
                                src={FRONTERA}
                                width=""
                                height="26"
                                className="d-inline-block align-top"
                            />
                        </a>
                        </div>

                    
                    
                    </nav>
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


    


