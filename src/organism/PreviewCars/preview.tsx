import React from "react";
import Card from "../../molecules/Cards/carCard";
import CarImg from "../../assets/bmw.jpg";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 8rem 0;
`;
const Preview = () => {
    return (
        <Container>
            <Card bg={CarImg}></Card>
            <Card bg={CarImg}></Card>
            <Card bg={CarImg}></Card>
        </Container>
    );
};

export default Preview;
