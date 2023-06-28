import { TextInput, Modal, TouchableOpacity, View } from "react-native";
import React, { FunctionComponent, useState } from "react";
import RegularButton from "../Buttons/RegularButton";
import { TransactionProps } from "./types";
import styled from "styled-components/native";
import { Container } from "../shared";
import { colors } from "../colors";

const FormContainer = styled(Container)`
    background-color: ${colors.graylight};
    width: 100%;
    justify-content: center;
    flex: 1;
`;

const FormTextInput = styled.TextInput`
  height: 40px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
`;

const SubmitButton = styled(RegularButton)`
  margin-top: 10px;
`;

interface TransactionFormProps {
  onClose: () => void;
}

const saveTransaction = async (newTransaction: TransactionProps) => {
  try {
    const response = await fetch("http://192.168.1.104:8080/transactions/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    });
  } catch (error) {
    console.error("Error saving the new transaction", error);
  }
};

const TransactionForm: FunctionComponent<TransactionFormProps> = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [icon, setIcon] = useState("");
  const [background, setBackground] = useState("");

  const handleSubmit = () => {
    const newTransaction = {
      title,
      subtitle,
      amount,
      date,
      icon,
      background,
    };

    saveTransaction(newTransaction);

    onClose();
  };

  return (
    <Modal visible animationType="slide" onRequestClose={onClose}>
      <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={onClose}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <FormContainer>
            <FormTextInput placeholder="Title" value={title} onChangeText={setTitle} />
            <FormTextInput placeholder="Subtitle" value={subtitle} onChangeText={setSubtitle} />
            <FormTextInput placeholder="Amount" value={amount} onChangeText={setAmount} />
            <FormTextInput placeholder="Date" value={date} onChangeText={setDate} />
            <FormTextInput placeholder="Icon" value={icon} onChangeText={setIcon} />
            <FormTextInput placeholder="Background" value={background} onChangeText={setBackground} />

            <SubmitButton onPress={handleSubmit}>Submit</SubmitButton>
          </FormContainer>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default TransactionForm;
