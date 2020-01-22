import React from 'react'
import {Switch, Route } from 'react-router-dom'
import Main from './components/Main'
import Training from './components/Training'
import User from './components/User'
import Allocations from './components/Allocations'
import Fellowships from './components/Fellowships'
import News from './components/News'
import About from './components/About'
import Help from './components/Help'


const Router = () => {
    return(
        <Switch>
            <Route exact path='/main' component={Main}></Route>
            <Route path='/training' component={Training}></Route>
            <Route path='/user' component={User}></Route>
            <Route path='/allocations' component={Allocations}></Route>
            <Route path='/fellowships' component={Fellowships}></Route>
            <Route path='/news' component={News}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/help' component={Help}></Route>
        </Switch>
    )
}

export default Router