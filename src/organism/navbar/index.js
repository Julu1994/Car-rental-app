import React from "react";
import Lk from "../../atom/link";
import Li from "../../atom/list";
import Ul from "../../molecules/UL";
import "./index.scss";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Lk cls="navbar__logo_text" children="Quick Rent" path="/" />
            </div>
            <Ul cls="navbar__menu">
                <Li>
                    <Lk cls="navbar__menu_item" children="Home" path="/" />
                </Li>
                <Li>
                    <Lk cls="navbar__menu_item" children="About" path="/" />
                </Li>
                <Li>
                    <Lk cls="navbar__menu_item" children="Discover" path="/" />
                </Li>
                <Li>
                    <Lk cls="navbar__menu_item" children="Contact" path="/" />
                </Li>
            </Ul>

            <div className="navbar__menu-icon">
                <i className="fas fa-bars"></i>
            </div>
        </nav>
    );
};

export default Navbar;
