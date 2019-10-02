import React from 'react'
import IntroCardUI from './IntroCardUI'

const IntroductionUI = () => {

    return (
        <div className="introduction">
            <h1>Introduction</h1>
            <div className="title animation">
                <h2>Hi, I'm a developer!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, voluptate repellat ut molestiae obcaecati aut saepe voluptas repudiandae porro, sint qui in et deleniti doloribus ipsum. Culpa asperiores nulla quibusdam.</p>
                <button className="btn btn-blue">Clique aqui!</button>
            </div>

            <IntroCardUI />
            
        </div>
    )
}

export default IntroductionUI
