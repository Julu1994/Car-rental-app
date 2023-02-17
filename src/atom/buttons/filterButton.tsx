import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 40%;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: centre;
    border: 1px solid #696969;
    border-radius: 0.5rem;
    overflow: hidden;
`;
interface ButtonProps {
    bg?: boolean;
    color?: string;
}
const Li = styled.li<ButtonProps>`
    height: 100%;
    padding: 1rem;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: ${(props) => (props.bg ? "#2F4F4F" : "transparent")};
`;

const Img = styled.img`
    max-width: 3.5rem;
`;
const Text = styled.p<ButtonProps>`
    font-size: 1rem;
    padding-left: 0.5rem;
    color: ${(props) => (props.bg ? "#FFFFFF" : "#000000")};
`;

const FilterButton = () => {
    const [carBtnBG, setCarBtnBG] = React.useState(true);
    const [vanBtnBG, setVanBtnBG] = React.useState(false);
    const [prestigeBtnBG, setPrestigeBtnBG] = React.useState(false);
    const carBtnHandle = () => {
        setCarBtnBG(true);
        setPrestigeBtnBG(false);
        setVanBtnBG(false);
    };
    const vanBtnHandle = () => {
        setVanBtnBG(true);
        setCarBtnBG(false);
        setPrestigeBtnBG(false);
    };
    const prestigeBtnHandle = () => {
        setPrestigeBtnBG(true);
        setCarBtnBG(false);
        setVanBtnBG(false);
    };
    return (
        <Container>
            <Li bg={carBtnBG} onClick={carBtnHandle}>
                <Img
                    src={
                        "https://www.europcar.com/_nuxt/img/cars-filter.bdb1eda.png"
                    }
                    alt={"Car"}
                />
                <Text bg={carBtnBG}>Car</Text>
            </Li>
            <Li bg={vanBtnBG} onClick={vanBtnHandle}>
                <Img
                    src={
                        "https://www.europcar.com/_nuxt/img/vans-trucks-filter.2319eb0.png"
                    }
                    alt={"Car"}
                />
                <Text bg={vanBtnBG}>Van</Text>
            </Li>
            <Li bg={prestigeBtnBG} onClick={prestigeBtnHandle}>
                <Img
                    src={
                        "https://www.europcar.com/_nuxt/img/prestige-filter.94613cf.png"
                    }
                    alt={"Car"}
                />
                <Text bg={prestigeBtnBG}>Prestige</Text>
            </Li>
        </Container>
    );
};

export default FilterButton;
