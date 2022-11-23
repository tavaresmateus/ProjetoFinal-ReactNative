import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./Stack";
import AuthStack from "./AuthStack";

export default function(){
    const auth = false;
    return(
        <NavigationContainer>
            {auth?<Stack/>:<AuthStack/>}
        </NavigationContainer>
    )
}