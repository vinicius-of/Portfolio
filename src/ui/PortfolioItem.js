import React from 'react'
import githubIcon from '../imgs/GitHub-Mark-Light-32px.png'

const PortfolioItem = ({title, linkGithub, imageHref}) => {
    return (
        <div className="portfolio-item">
            <img src="https://i0.wp.com/media.boingboing.net/wp-content/uploads/2016/03/OLD.jpg?w=1200&ssl=1" alt=""/>
            <div className="title-div">
                <h2>{ title } <a href={ linkGithub } target="_blank" rel="noopener noreferrer"><img src={ githubIcon } alt=""/></a></h2>
            </div>
        </div>
    )
}

export default PortfolioItem
