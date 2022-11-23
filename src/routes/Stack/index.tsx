import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {Home} from "../../screens/Home";
import { propsNavigationStack } from "./Models";


const{Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>()

export default function(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Home" component={Home}/>
        </Navigator>
    )
}