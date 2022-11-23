import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, Button } from "react-native";
import { styles } from "./styles";
import {useNavigation} from "@react-navigation/native"
import { propsAuthStack } from "../../routes/AuthStack/Models";

export const Explore = () => {

    const navigation = useNavigation<propsAuthStack>()
    return (

        <>
            <View style={styles.container}>

                <Image
                    style={styles.bola1}
                    source={require('../../assets/elipse.png')} />

                <Image
                    style={styles.market}
                    source={require('../../assets/market.png')} />


            </View>

            <View style={styles.rodape}>
                <Text style={styles.explore}>
                    Explore the app
                </Text>

                <Text style={styles.exploreText}>
                    Bem vindo ao novo E-commerce de Petrópolis, Aqui os descontos chegam mais rapido que o ruço de segunda-feira. No nosso app você encontra móveis, eletrônicos e tudo que você possa imaginar..              </Text>
                
                <TouchableOpacity
                style={styles.botao} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.botaoText}>Let's Start</Text> 
                </TouchableOpacity>

            </View>
        </>
    )
}