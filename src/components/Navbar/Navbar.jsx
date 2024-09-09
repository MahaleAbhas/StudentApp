import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="#">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/home">Home </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/about">About </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/register">Register </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/contact">Contact </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/show">Show </NavLink>
                        </li>
                        
                        
                    </ul>
                </div>
            </nav>
                

        </div>
    )
}

export default Navbar