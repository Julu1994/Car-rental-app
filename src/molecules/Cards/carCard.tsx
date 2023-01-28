import React from "react";
import styled from "styled-components";

interface Props {
    bg?: any;
}
const Container = styled.div<Props>`
    width: 20rem;
    height: 25rem;
    background-image: url(${(props) => props.bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
`;
const Border = styled.div`
    width: 96%;
    height: 96%;
    border: 0.5px solid white;
    border-radius: 0.4rem;
`;
const CarCard: React.FC<Props> = ({ bg }) => {
    return (
        <Container bg={bg}>
            <Border>CarCard</Border>
        </Container>
    );
};

export default CarCard;
