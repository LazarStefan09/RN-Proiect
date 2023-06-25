import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import visa from "../assets/cards/visa_white.png";
//custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import CardSection from "../components/Cards/CardSection";

const HomeContainer = styled(Container)`
    background-color: ${colors.graylight};
    width: 100%;
    flex: 1;
`;

const Home: FunctionComponent = () => {
    const cardsData = [
        {
            id: 1,
            accountNumber: "1234567890",
            balance: 5000,
            alias: "Credit Card",
            logo: visa,
        },
        {
            id: 2,
            accountNumber: "0987654321",
            balance: 7000,
            alias: "Online disposable card",
            logo: visa,
        },
    ];

    return (
        <HomeContainer>
            <StatusBar style="dark"/>
            <CardSection data={cardsData} />
        </HomeContainer>
    );
};

export default Home;