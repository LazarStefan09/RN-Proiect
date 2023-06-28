import React, { FunctionComponent, useState } from "react";
import styled from "styled-components/native";
import RegularButton from "../Buttons/RegularButton";
import { colors } from "../colors";
import { Ionicons } from "@expo/vector-icons";
import TransactionForm from "../Transactions/TransactionForm";

const ButtonSectionBackground = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
`;

const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const ButtonSection: FunctionComponent = () => {
  const [isFormVisible, setFormVisibility] = useState(false);

  const handlePayButtonClick = () => {
    setFormVisibility(true);
  };

  const handleFormClose = () => {
    setFormVisibility(false);
  };

  return (
    <ButtonSectionBackground>
      <RegularButton btnStyles={{ width: "50%" }} onPress={handlePayButtonClick}>
        Pay <Ionicons size={17} name="card" color={colors.white} />
      </RegularButton>

      {isFormVisible && (
        <Overlay>
          <TransactionForm onClose={handleFormClose} />
        </Overlay>
      )}
    </ButtonSectionBackground>
  );
};

export default ButtonSection;