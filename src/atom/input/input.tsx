import React from "react";
import styled from "styled-components";
import { IoLocationOutline } from "react-icons/io5";

interface InputProps {
    width?: string;
    height?: string;
}
const Container = styled.div<InputProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: #ffffff;
    padding: 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.5rem;
`;

const InputField = styled.input`
    width: 95%;
    height: 100%;
    font-size: 1rem;
    border: none;
    padding-left: 0.2rem;
    &:focus {
        border: none;
        outline: none;
    }
    &::placeholder {
        color: #a9a9a9;
    }
`;

export const Input: React.FC<InputProps> = ({ width, height }) => {
    return (
        <Container width={width} height={height}>
            <IoLocationOutline size={25} color={"#1E90FF"} />
            <InputField placeholder="Pickup &amp; return location" />
        </Container>
    );
};
