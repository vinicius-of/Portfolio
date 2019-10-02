import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarUI = () => {
    return (
        <div>
            <nav>
                <ul className="navbar">
                    <NavLink exact to="/">Introduction</NavLink>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                    <NavLink to="/technologies">Technologies</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    {/* <button className="btn btn-round btn-light">Dark</button> */}
                </ul>
            </nav>
        </div>
    )
}

export default NavbarUI
