import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <div className="container-flud nav_bg" >
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:"white"}}>
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">P4p_itam</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 link">
                                        <li className="nav-item">
                                            <NavLink className="nav-link active" aria-current="page" to="/Home">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/Survice">Survices</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/About">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                                        </li>
                                       
                                        
                                    </ul>
                                   
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
} 
export default Navbar;