import React from "react";
import car from "../../assets/car.png";
import styled from "styled-components";
import img from "../../assets/bg.jpg";
import CarCard from "../../molecules/Cards/carCard";
import cardImage from "../../assets/bmw.jpg";

const Container = styled.div`
    width: 100%;
    height: 70vh;
    background-image: url(${img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: red;
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
        rgba(0, 9, 10) 16%,
        rgba(17, 12, 103, 0) 51%
    );
`;

const Home = () => {
    return (
        <>
            <Container>
                <BlueBackground />
                <StyledImg src={car} alt="car" />
            </Container>
            <CarCard bg={cardImage} />
        </>
    );
};

export default Home;
