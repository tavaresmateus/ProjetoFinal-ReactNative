import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import { Explore } from "../../screens/Explore";
import { Login } from "../../screens/Login";
import { propsNavigationAuthStack } from "./Models";
import { Register } from "../../screens/Register";


const{Navigator, Screen} = createNativeStackNavigator<propsNavigationAuthStack>()

export default function(){
    return(
        <Navigator initialRouteName="Explore" screenOptions={{headerShown: false}}>
            <Screen name="Explore" component={Explore} />
            <Screen name="Login" component={Login}/>
            <Screen name="Register" component={Register} />
        </Navigator>
    )
}