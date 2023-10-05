import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {

    return (
        <nav className="navbar navbar-expand-sm bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Jobly</Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-4">
                        <NavLink className="nav-link" to="/companies">Companies</NavLink>
                    </li>
                    <li className="nav-item mr-4">
                        <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
                    </li>
                    <li className="nav-item mr-4">
                        <NavLink className="nav-link" to="/profile">Profile</NavLink>
                    </li>
                    <li className="nav-item mr-4">
                        <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
                    </li>
                    <li className="nav-item mr-4">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;