import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { ScreenWidth } from "../shared";
import card_background from "../../assets/background/background_transparent.png"
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";


const CardBackground = styled.ImageBackground`
    height: 75%;
    width: ${ScreenWidth * 0.67}px;
    resize-mode: cover;
    background-color: ${colors.accent};
    border-radius: 25px;
    margin-right: 25px;
    overflow: hidden;
`;

const CardTouchable = styled.TouchableHighlight`
    height: 100%;
    border-radius: 25px;
`;

const TouchableView = styled.View`
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    flex: 1;
`;

const CardRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const Logo = styled.Image`
    width: 50%;
    height: 80%;
    resize-mode: contain;
    flex: 1;
`;

//types
import { CardProps } from "./types";
import { colors } from "../colors";
import { View } from "react-native";

const CardItem: FunctionComponent<CardProps> = (props) => {
    const handlePress = () => {};

    return (
        <CardBackground source={card_background}>
            <CardTouchable underlayColor={colors.secondary} onPress={handlePress}>
                <TouchableView>
                    <CardRow>
                        <RegularText textStyles={{color: colors.white}}>
                            ****** {props.accountNumber.slice(6, 10)}
                        </RegularText>
                    </CardRow>
                    <CardRow>
                    <View style = {{ flex: 3}}>
                        <SmallText
                        textStyles={{ marginBottom: 5, color: colors.graylight}}
                        >
                            Total balance
                        </SmallText>
                        <RegularText textStyles={{ fontSize: 19}}>
                            ${props.balance}
                        </RegularText>
                    </View>
                    <Logo source={{ uri: props.logo }} />
                    </CardRow>
                </TouchableView>
            </CardTouchable>
        </CardBackground>
    );
};

export default CardItem;