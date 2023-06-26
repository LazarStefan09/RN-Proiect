import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import visa from "../assets/cards/visa_white.png";
//custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import CardSection from "../components/Cards/CardSection";
import TransactionSection from "../components/Transactions/TransactionSection";

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

const transactionData = [
    {
        id: 1,
        amount: "-$10",
        date: "23 Jun 2023",
        title: "McDonalds",
        subtitle: "McChicken Menu",
        art: {
            background: colors.primary,
            icon: "fast-food",
        },
    },
    {
        id: 2,
        amount: "-$50",
        date: "24 Jun 2023",
        title: "Shopping",
        subtitle: "Amazon",
        art: {
            background: colors.tertiary,
            icon: "cart",
        },
    },
    {
        id: 3,
        amount: "-$200",
        date: "25 Jun 2023",
        title: "Travel",
        subtitle: "Greece",
        art: {
            background: colors.accent,
            icon: "airplane",
        },
    },
];

    return (
        <HomeContainer>
            <StatusBar style="dark"/>
            <CardSection data={cardsData} />
            <TransactionSection data={transactionData}/>
        </HomeContainer>
    );
};

export default Home;