import React from 'react'

const TechUI = ({list, handleChangeComponent}) => {
    const listTech = list.map((tech) => {
        return(
            <div className="tech-item" key = {tech.id}>
                <button onClick = { () => {handleChangeComponent(tech.id)} }>
                    <img src={ tech.icon } alt="Imagem Tech"/>
                    <p>{ tech.name }</p>
                </button>
            </div>
        )
    })

    return (
        <div className="tech-list">
            { listTech }
        </div>
    )
}

export default TechUI
