import React from "react";
import styled from "styled-components";

interface Props {
    children: any;
}
const Header = styled.h1`
    color: ##000000;
`;

const Text = styled.p`
    color: ##000000;
`;

export const HeadingTypography: React.FC<Props> = ({ children }) => {
    return <Header>{children}</Header>;
};

export const TextTypography: React.FC<Props> = ({ children }) => {
    return <Text>{children}</Text>;
};
