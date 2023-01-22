import React from "react";
import styled from "styled-components";
interface ToggleProps {
    isToggle: boolean;
}
const MenuToggle = styled.div<ToggleProps>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    color: #fff;
    transform: ${(props) => (props.isToggle ? "translateX(3rem)" : "")};
`;
const MenuButton = styled.div<ToggleProps>`
    width: 2rem;
    height: 3px;
    background: ${(props) => (props.isToggle ? "transparent" : "#fff")};
    border-radius: 5px;
    transition: all 1s ease-in-out;
    &::before {
        content: "";
        position: absolute;
        width: 2rem;
        height: 3px;
        background: #fff;
        border-radius: 5px;
        transition: all 0.5s ease-in-out;
        transform: ${(props) =>
            props.isToggle
                ? "rotate(45deg) translate(-2rem, 2rem)"
                : "translateY(-0.7rem)"};
    }
    &::after {
        content: "";
        position: absolute;
        width: 2rem;
        height: 3px;
        background: #fff;
        border-radius: 5px;
        transition: all 0.5s ease-in-out;
        transform: ${(props) =>
            props.isToggle
                ? "rotate(-45deg) translate(-2rem, -2rem)"
                : "translateY(0.7rem)"};
    }
    }
    &:hover {
        width: 1.5rem;
    }
`;

const ToggleButton = () => {
    const [menu, setMenu] = React.useState(false);
    const toggleHandler = () => {
        setMenu(!menu);
    };
    return (
        <MenuToggle isToggle={menu}>
            <MenuButton isToggle={menu} onClick={toggleHandler}></MenuButton>
        </MenuToggle>
    );
};

export default ToggleButton;
