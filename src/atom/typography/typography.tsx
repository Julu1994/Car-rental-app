import React from "react";
import styled from "styled-components";

interface Props {
    children: any;
    fontSize?: string;
    color?: string;
}
const Header = styled.h1`
    color: ##000000;
`;
const HeaderMedium = styled.h3`
    color: ##000000;
    font-weight: 250;
`;

const Text = styled.p<Props>`
    color: ${(props) => (props.color ? props.color : "##000000")};
    font-size: ${(props) => props.fontSize};
`;

export const HeadingTypography: React.FC<Props> = ({ children }) => {
    return <Header>{children}</Header>;
};
export const HeadingTypographyMedium: React.FC<Props> = ({ children }) => {
    return <HeaderMedium>{children}</HeaderMedium>;
};

export const TextTypography: React.FC<Props> = ({
    children,
    color,
    fontSize,
}) => {
    return (
        <Text color={color} fontSize={fontSize}>
            {children}
        </Text>
    );
};
