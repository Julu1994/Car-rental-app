import React from "react";
import styled from "styled-components";
import { TextTypography } from "../typography/typography";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface ContainerProps {
    width?: string;
    border?: string;
}
const Container = styled.div<ContainerProps>`
    width: ${(props) => props.width};
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: centre;
    border: 1px solid ${(props) => props.border};
    border-radius: 0.5rem;
    overflow: hidden;
`;
interface ButtonProps {
    bg?: boolean;
    color?: string;
}
const Li = styled.li<ButtonProps>`
    height: 100%;
    padding: 1rem;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: ${(props) => (props.bg ? "#0088cc" : "transparent")};
`;

const Img = styled.img`
    max-width: 3.5rem;
`;
const Text = styled.p<ButtonProps>`
    font-size: 1rem;
    padding-left: 0.5rem;
    color: ${(props) => (props.bg ? "#FFFFFF" : "#000000")};
`;
const DateBtnContainer = styled.div`
    width: 65%;
    height: 3rem;
    border-right: 1px solid #a9a9a9;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const TimeBtnContainer = styled.div`
    width: 35%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Input = styled.input``;
export const FilterButton = () => {
    const [carBtnBG, setCarBtnBG] = React.useState(true);
    const [vanBtnBG, setVanBtnBG] = React.useState(false);
    const [prestigeBtnBG, setPrestigeBtnBG] = React.useState(false);
    const carBtnHandle = () => {
        setCarBtnBG(true);
        setPrestigeBtnBG(false);
        setVanBtnBG(false);
    };
    const vanBtnHandle = () => {
        setVanBtnBG(true);
        setCarBtnBG(false);
        setPrestigeBtnBG(false);
    };
    const prestigeBtnHandle = () => {
        setPrestigeBtnBG(true);
        setCarBtnBG(false);
        setVanBtnBG(false);
    };
    return (
        <Container width={"40%"} border={"#A9A9A9"}>
            <Li bg={carBtnBG} onClick={carBtnHandle}>
                <Img
                    src={
                        "https://www.europcar.com/_nuxt/img/cars-filter.bdb1eda.png"
                    }
                    alt={"Car"}
                />
                <Text bg={carBtnBG}>Car</Text>
            </Li>
            <Li bg={vanBtnBG} onClick={vanBtnHandle}>
                <Img
                    src={
                        "https://www.europcar.com/_nuxt/img/vans-trucks-filter.2319eb0.png"
                    }
                    alt={"Car"}
                />
                <Text bg={vanBtnBG}>Van</Text>
            </Li>
            <Li bg={prestigeBtnBG} onClick={prestigeBtnHandle}>
                <Img
                    src={
                        "https://www.europcar.com/_nuxt/img/prestige-filter.94613cf.png"
                    }
                    alt={"Car"}
                />
                <Text bg={prestigeBtnBG}>Prestige</Text>
            </Li>
        </Container>
    );
};

export const DateBtn = () => {
    const [startDate, setStartDate] = React.useState(null);
    const [time, setTime] = React.useState("");
    const [isDateVisible, setIsDateVisible] = React.useState(false);
    const handleDateChange = (date: any) => {
        setStartDate(date);
        setTime(date.toLocaleTimeString());
    };

    return (
        <Container width={"20%"} border={"#A9A9A9"}>
            <DateBtnContainer onClick={() => setIsDateVisible(!isDateVisible)}>
                <DatePicker
                    showTimeSelect
                    selected={startDate}
                    customInput={<Input />}
                    onChange={handleDateChange}
                    placeholderText="Date"
                    className="date"
                />
            </DateBtnContainer>
            <TimeBtnContainer>
                <DatePicker
                    showTimeSelect
                    selected={startDate}
                    customInput={<Input />}
                    onChange={handleDateChange}
                    placeholderText="Time"
                    className="date"
                    showTimeSelectOnly
                    timeIntervals={15}
                    dateFormat="h:mm aa"
                />
                {/* <TextTypography
                    color={!time ? "#A9A9A9" : "#000000"}
                    fontSize={"1rem"}>
                    {!time ? "Time" : time}
                </TextTypography> */}
            </TimeBtnContainer>
        </Container>
    );
};
