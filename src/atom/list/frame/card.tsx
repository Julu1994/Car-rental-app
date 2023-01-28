import React from "react";
import styled from "styled-components";
interface Props {
    bgColor?: any;
}
const Container = styled.div<Props>`
    z-index: 20000;
    width: 20rem;
    height: 20rem;
    background-color: ${(props) => props.bgColor};
`;
interface CardProps {
    children: any;
}

export const Card: React.FC<CardProps> = ({ children }) => {
    return <Container bgColor={"red"}>{children}</Container>;
};
