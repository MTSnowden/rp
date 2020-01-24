import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NSF from '../img/nsf-White.png'
import TACC from '../img/TACC-logo.png'
import FRONTERA from '../img/Frontera-White-Solo.png'



export default class Nav extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark"> 

                <div className="navbar-header navbar dual-collapse2">
                    <a href="https://www.nsf.gov/" className="navbar">
                        <img
                            alt=""
                            src={NSF}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />
                    </a>

                    <a href="https://www.tacc.utexas.edu" className="navbar">
                        <img
                            alt=""
                            src={TACC}
                            width=""
                            height="26"
                            className="d-inline-block align-top"
                        />
                    </a>
                    <a href="/main" className="navbar">
                        <img
                            alt=""
                            src={FRONTERA}
                            width=""
                            height="26"
                            className="d-inline-block align-top"
                        />
                    </a>
                </div>

                <div className="collapse navbar-collapse" id="main-navigation">
                    <ul className="nav">
                        <li className="nav-link"><Link to='/Main'></Link></li>

                        <li className="nav-link"><Link to='/Training'>Training</Link></li>
                        <li className="nav-link"><Link to='/User'>User Guide</Link></li>
                        <li className="nav-link"><Link to='/Allocations'>Allocations</Link></li>
                        <li className="nav-link"><Link to='/Fellowships'>Fellowships</Link></li>
                        <li className="nav-link"><Link to='/News'>News</Link></li>
                        <li className="nav-link"><Link to='/About'>About</Link></li>
                        <li className="nav-link"><Link to='/Help'>Help</Link></li>
                    </ul>
                </div>

            </nav>
        )
    }
}




// const linkStyle = {
//  color: "#FFFFFF",
//  fontFamily: "bentonSansMedium"
// }
    


