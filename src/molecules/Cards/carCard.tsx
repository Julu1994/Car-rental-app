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
    transform: perspective(800px);
    transform-style: preserve-3d;
    cursor: pointer;
`;
const Wrapper = styled.div`
    position: relative;
    flex: 0 0 240px;
    width: 240px;
    height: 320px;
    background-color: #333;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
        inset rgba(white, 0.5) 0 0 0 6px;
    transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
`;
const Border = styled.div`
    width: 96%;
    height: 96%;
    border: 0.5px solid white;
    border-radius: 0.4rem;
`;
const Card: React.FC<Props> = ({ bg }) => {
    return (
        <Container bg={bg}>
            <Wrapper>
                <Border>Card</Border>
            </Wrapper>
        </Container>
    );
};

export default Card;
