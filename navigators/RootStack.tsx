import React, { FunctionComponent } from "react";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import { colors } from "../components/colors";
import Greeting from "../components/Header/Greeting";
import ProfilePic from "../components/Header/ProfilePic";
import ProfilePicture from "../assets/av-gato.jpg"

type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
};



const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerStyle: {
                borderStartColor: colors.graylight,
                borderBottomWidth: 0,
                shadowColor: "transparent",
                shadowOpacity: 0,
                elevation: 0,
                height: 120,
            },
            headerTintColor: colors.secondary,
            headerRightContainerStyle: {
                paddingRight: 25,
            },
            headerLeftContainerStyle: {
                paddingLeft: 15,
            },
            headerRight: () => (
                <ProfilePic
                    img={ProfilePicture}
                    imgContainerStyle={{ backgroundColor: colors.tertiary}}
                />
            ),
        }}
         initialRouteName="Home"
         >
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="Home"
            component={Home}
            options={{
                headerTitle: (props) => (
                    <Greeting
                    mainText="Hey Stefan"
                    subText="Welcome Back"
                    {...props}
                    />
                ),
                headerLeft: () => <></>,
            }}
            />
        </Stack.Navigator>
    </NavigationContainer>
);
}

export default RootStack;