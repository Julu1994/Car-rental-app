import React from "react";
import styled from "styled-components";
import FilterButton from "../../atom/buttons/filterButton";
import { HeadingTypographyMedium } from "../../atom/typography/typography";

const Container = styled.div`
    width: 100%;
`;
const SearchWrapper = styled.div`
    width: 70%;
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
            </SearchWrapper>
        </Container>
    );
};

export default SearchBar;
