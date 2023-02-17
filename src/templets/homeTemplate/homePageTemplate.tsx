import React from "react";
import car from "../../assets/car.png";
import styled from "styled-components";
import img from "../../assets/bg.jpg";
import Navbar from "../../organism/navbar";
import SearchBar from "../../organism/SearchBar/searchBar";

const HeroContainer = styled.div`
    width: 100%;
    height: 70vh;
    background-image: url(${img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
`;
const StyledImg = styled.img`
    position: absolute;
    top: 55%;
    left: 20%;
    transform: scale(1.2);

    @media (max-width: 600px) {
        transform: scale(1);
        top: 80%;
        left: 0;
        width: 100%;
    }
`;
const BlueBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background: linear-gradient(
        180deg,
        rgba(0, 9, 10) 16%,
        rgba(17, 12, 103, 0) 51%
    );
`;

const HomePageTem = () => {
    return (
        <div>
            <HeroContainer>
                <Navbar />
                <BlueBackground />
                <StyledImg src={car} alt="car" />
            </HeroContainer>
            <SearchBar />
        </div>
    );
};

export default HomePageTem;
