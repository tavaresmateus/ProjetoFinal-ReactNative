import React,{useContext} from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./Stack";
import AuthStack from "./AuthStack";
import { AuthContext, useAuth } from "../contexts/Auth";

export default function(){
    const {authData} = useAuth()
    return(
        <NavigationContainer>
            {authData?<Stack/>:<AuthStack/>}
        </NavigationContainer>
    )
}