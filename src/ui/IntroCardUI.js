import React from 'react'
import { getListCards } from '../libs/images_lib'

const IntroCardUI = () => {
    const cards = getListCards()

    const renderCards = cards.map((card) => {
        if(card){
            return(
                <div className="card-item" key={ card.id }>
                    <img src={ card.img } alt="No Image Found"/>
                    <p>{ card.description }</p>
                </div>
            )
        } else {
            return (
                <div className="card-item">
                    <p>Placeholder Text</p>
                </div>
            )
        }
    })

    return(
        <div className="card-list animation">
            { renderCards }
        </div>
    )
}

export default IntroCardUI
