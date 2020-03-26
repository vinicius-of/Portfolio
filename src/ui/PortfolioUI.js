import React from 'react'
import PortItem from './PortfolioItem'

const PortfolioUI = () => {
    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            <div className="portfolio-list">
                <PortItem  title={ "Teste 1" } linkGithub={ "https://github.com/vinicius-of" } imageHref={ "" }/>
                <PortItem  title={ "Teste 1" } linkGithub={ "https://github.com/vinicius-of" } imageHref={ "" }/>
                <PortItem  title={ "Teste 1" } linkGithub={ "https://github.com/vinicius-of" } imageHref={ "" }/>
            </div>
        </div>
    )
}

export default PortfolioUI
