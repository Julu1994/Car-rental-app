import Lk from "../../atom/link";
import Li from "../../atom/list";
import Ul from "../../molecules/UL";
import "./index.scss";

const navItem: string[] = ["Home", "About", "Discover", "Contact"];

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Lk cls="navbar__logo_text" children="Quick Rent" path="/" />
            </div>
            <Ul cls="navbar__menu">
                {navItem.map((item, index) => {
                    //console.log(item);
                    return (
                        <Li key={index}>
                            <Lk
                                cls="navbar__menu_item"
                                children={item}
                                path="/"
                            />
                        </Li>
                    );
                })}
            </Ul>

            <div className="navbar__menu-icon">
                <i className="fas fa-bars"></i>
            </div>
        </nav>
    );
};

export default Navbar;
