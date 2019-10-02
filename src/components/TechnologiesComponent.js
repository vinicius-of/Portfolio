import React, {Component} from 'react'
import TechUI from '../ui/TechUI'
import { getListTech } from '../libs/images_lib'

class TechnologiesComponent extends Component{
    state = {
        list: getListTech(),
        tech: 0
    }

    handleChangeComponent = (id) => {
        this.setState({
            tech: id
        })
    }

    render(){
        return (
            <div className="technologies">
                <h1>Technologies</h1>
                <div className="container description">
                    {/* Tech List from TechUI */}
                    <TechUI list = {this.state.list} handleChangeComponent = {this.handleChangeComponent} />
                    <div className="content-description">
                        <img src="" alt=""/>
                        <h1>{ this.state.list[this.state.tech].name }</h1>
                        <a href={ this.state.list[this.state.tech].link } target="_blank" rel="noopener noreferrer">Link to: { this.state.list[this.state.tech].name }</a>
                        <p>{ this.state.list[this.state.tech].description }</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default TechnologiesComponent
