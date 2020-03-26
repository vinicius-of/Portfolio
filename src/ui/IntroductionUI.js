import React from 'react'
import PortfolioUI from './PortfolioUI'

function IntroductionUI(){
    
        return (
            <div className="introduction">
                <h1>Introduction</h1>
                <div className="title animation">
                    <h2>Hi, I'm a Developer!</h2>
                    <p>Hello, I'm Vinicius. My main techonologies is React (Native for mobile dev), Bootstrap as CSS framework (I can work with SASS) and Node JS (Express JS) for Back-end development. For contact, click below.</p>
                    <a role="button" className="btn btn-blue" href="/contact">Contact Here!</a>
                </div>
                <PortfolioUI />
            </div>
        )
    
}

export default IntroductionUI
