import React from "react";
import car from "../../assets/car.png";
import styled from "styled-components";
import img from "../../assets/bg.jpg";

const Container = styled.div`
    transform: translateY(-18%);
    width: 100%;
    height: 70vh;
    background-image: url(${img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    z-index: -1;
`;
const StyledImg = styled.img`
    position: absolute;
    top: 55%;
    left: 20%;
    transform: scale(1.2);
`;
const BlueBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background: linear-gradient(
        180deg,
        rgba(14, 9, 84, 1) 16%,
        rgba(17, 12, 103, 0) 51%
    );
`;

const Home = () => {
    return (
        <Container>
            <BlueBackground />
            <StyledImg src={car} alt="car" />
        </Container>
    );
};

export default Home;
