import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import { propsNavigationStack } from "./Models";
import { Shopee } from "../../screens/Home/";


const{Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>()

export default function(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Shopee" component={Shopee}/>
        </Navigator>
    )
}