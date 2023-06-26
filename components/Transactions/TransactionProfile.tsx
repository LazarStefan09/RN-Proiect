import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { TransactionProfileProps } from "./types";
import { Ionicons } from "@expo/vector-icons";

const StyledView = styled.View`
    height: 45px;
    width: 45px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const TransactionProfile: FunctionComponent<TransactionProfileProps> = (props) => {
    return (
        <StyledView style={{ backgroundColor: props.background }}>
            <Ionicons name={props.icon} size={25} color={colors.white}/>
        </StyledView>
    );
};

export default TransactionProfile;