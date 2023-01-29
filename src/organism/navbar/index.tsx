import ToggleButton from "../../atom/buttons/toggleButton";
import Lk from "../../atom/link/link";
import Li from "../../atom/list";
import Ul from "../../molecules/UL";
import "./index.scss";

const navItem: { link: string; path: string }[] = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Rent", path: "/rent" },
];

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Lk cls="navbar__logo_text" children="Quick Rent" path="/" />
            </div>
            <Ul cls="navbar__menu">
                {navItem.map((item, index) => {
                    return (
                        <Li key={index}>
                            <Lk
                                cls="navbar__menu_item"
                                children={item.link}
                                path={item.path}
                            />
                        </Li>
                    );
                })}
            </Ul>

            <div className="navbar__menu-icon">
                <ToggleButton />
            </div>
        </nav>
    );
};

export default Navbar;
