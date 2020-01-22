import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import Nav from './components/Nav'

class App extends Component {
    
    render() {
        return(
          <div>
            <BrowserRouter>
            <Nav />
            <Router />
            
            </BrowserRouter>
            
            
            
          </div>
        )
        
    }
}

export default App