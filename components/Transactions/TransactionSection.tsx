import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { TransactionSectionProps } from "./types";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { Ionicons } from "@expo/vector-icons";
import TransactionItem from "./TransactionItem";

const TransactionSectionBackground = styled.View`
    width: 100%;
    padding-horizontal: 25px;
    padding-top: 5px;
    flex: 2;
`;

const TransactionRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const TransactionList = styled.FlatList`
    width: 100%;
`;

const TransactionSection: FunctionComponent<TransactionSectionProps> = (props) => {
    const transactions = props.data;

    const renderItem = ({ item }: { item: any }) => (
        <TransactionItem key={item.id} {...item} />
      );

    return (
        <TransactionSectionBackground>
            <TransactionRow style={{ marginBottom: 25}}>
                <RegularText textStyles={{ fontSize: 19, color: colors.secondary }} >
                    Transactions
                </RegularText>
                <SmallText textStyles={{ color: colors.secondary }} >
                    Recent
                <Ionicons name="caret-down" size={13} color={colors.graydark}/>
                </SmallText>
            </TransactionRow>
        
            <TransactionList
                data={transactions}
                renderItem={renderItem}
                keyExtractor={(item: { id: { toString: () => any; }; }) => item.id.toString()}
                contentContainerStyle={{ paddingBottom: 25 }}
      />
        </TransactionSectionBackground>
    );
};

export default TransactionSection;