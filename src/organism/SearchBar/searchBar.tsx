import React from "react";
import styled from "styled-components";
import { DateBtn, FilterButton } from "../../atom/buttons/filterButton";
import { Input } from "../../atom/input/input";
import { HeadingTypographyMedium } from "../../atom/typography/typography";

const Container = styled.div`
    width: 100%;
`;
const SearchWrapper = styled.div`
    width: 80%;
    height: 20rem;
    margin: 10rem auto;
    background-color: #dcdcdc;
`;
const SearchBar = () => {
    return (
        <Container>
            <SearchWrapper>
                <HeadingTypographyMedium>
                    {"What type of vehicle ? "}
                </HeadingTypographyMedium>
                <FilterButton />
                <HeadingTypographyMedium>
                    {"Pick up & Return location"}
                </HeadingTypographyMedium>
                <Input width="40%" height="3rem" />
                <DateBtn />
            </SearchWrapper>
        </Container>
    );
};

export default SearchBar;
