import React, { FunctionComponent, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
//custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import CardSection from "../components/Cards/CardSection";
import TransactionSection from "../components/Transactions/TransactionSection";
import SendMoneySection from "../components/SendMoney/SendMoneySection";

const HomeContainer = styled(Container)`
    background-color: ${colors.graylight};
    width: 100%;
    flex: 1;
`;

const Home: FunctionComponent = () => {
    const [cardsData, setCardsData] = useState([]);
    const [transactionData, setTransactionData] = useState([]);
    const [sendMoneyData, setSendMoneyData] = useState([]);

    useEffect(() => {
        const fetchCardsData = async () => {
          try {
            const response = await fetch("http://192.168.1.104:8080/cards");
            const data = await response.json();
            setCardsData(data);
          } catch (error) {
            console.error("Error fetching cards data:", error);
          }
        };

        const fetchTransactionData = async () => {
            try {
              const response = await fetch("http://192.168.1.104:8080/transactions");
              const data = await response.json();
              setTransactionData(data);
            } catch (error) {
              console.error("Error fetching transaction data:", error);
            }
          };

        const fetchSendMoneyData = async () => {
        try {
            const response = await fetch("http://192.168.1.104:8080/send-money");
            const data = await response.json();
            setSendMoneyData(data);
        } catch (error) {
            console.error("Error fetching send money data:", error);
        }
        };

        fetchTransactionData();  
        fetchCardsData();
        fetchSendMoneyData();
      }, []);

    return (
        <HomeContainer>
            <StatusBar style="dark"/>
            <CardSection data={cardsData} />
            <TransactionSection data={transactionData}/>
            <SendMoneySection data={sendMoneyData}/>
        </HomeContainer>
    );
};

export default Home;