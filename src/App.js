import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavbarUI from './ui/NavbarUI'
import IntroductionUI from './ui/IntroductionUI'
import TechnologiesComponent from './components/TechnologiesComponent'
import ContactComponent from './components/ContactComponent'

class App extends Component {
    render() {
        return (
            <div className="app">
                <BrowserRouter>
                <NavbarUI />
                    <Switch>
                        <Route exact path="/" component={IntroductionUI} />
                        <Route path="/technologies" component={TechnologiesComponent}/>
                        <Route path="/contact" component={ContactComponent} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App