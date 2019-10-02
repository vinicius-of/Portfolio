import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavbarUI from './ui/NavbarUI'
import IntroUI from './ui/IntroductionUI'
import PortfolioUI from './ui/PortfolioUI'
import TechnologiesComponent from './components/TechnologiesComponent'

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <NavbarUI />

                    <Switch>
                        <Route exact path="/" component={IntroUI} />
                        <Route path="/portfolio" component={PortfolioUI}/>
                        <Route path="/technologies" component={TechnologiesComponent}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App