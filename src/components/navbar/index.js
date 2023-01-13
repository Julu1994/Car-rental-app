import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link className="navbar__logo_text" to="/">
                    Quick Rent
                </Link>
            </div>
            <ul className="navbar__menu">
                <li>
                    <Link className="navbar__menu_item" to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="navbar__menu_item" to="/">
                        About
                    </Link>
                </li>
                <li>
                    <Link className="navbar__menu_item" to="/">
                        Contact
                    </Link>
                </li>
            </ul>
            <div className="navbar__menu-icon">
                <i className="fas fa-bars"></i>
            </div>
        </nav>
    );
};

export default Navbar;
