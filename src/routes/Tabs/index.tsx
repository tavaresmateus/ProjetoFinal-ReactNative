import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Register } from "../../screens/Register";
import { Shopee } from "../../screens/Home";
import { styles } from "../../screens/Explore/styles";

import {Entypo, Feather} from "@expo/vector-icons"
import { Carrinho } from "../../screens/Carrinho";

export default function(){
    const Tab = createBottomTabNavigator();
    return (

            <Tab.Navigator  initialRouteName="Shopee" 
             screenOptions={{headerShown: false,
                tabBarShowLabel: false,
               // tabBarStyle:{...styles.tab},
                tabBarHideOnKeyboard: true,
                tabBarStyle:{
                    backgroundColor: '#121212',
                    borderTopColor: 'transparent',
                },
                tabBarActiveTintColor: '#fff',
                tabBarItemStyle:{
                    paddingBottom: 5,
                    paddingTop: 5
                }
             }    
            }
             
             >
                <Tab.Screen name="Shopee" component={Shopee}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Entypo name="home" size={size} color={color}/>
                    )
                }
                }
                />
                <Tab.Screen name="Carrinho" component={Carrinho}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Feather name="shopping-cart" size={size} color={color}/>
                    )
                } }/>
            </Tab.Navigator>


    )
}