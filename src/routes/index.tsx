import React,{useContext} from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./Stack";
import AuthStack from "./AuthStack";
import { AuthContext, useAuth } from "../contexts/Auth";
import Tab from "./Tabs";
import Tabs from "./Tabs";

export default function(){
  const {authData} = useAuth()
    return(
        <NavigationContainer>
            {authData?<Tabs/>:<AuthStack/>}
        </NavigationContainer>
    )
}