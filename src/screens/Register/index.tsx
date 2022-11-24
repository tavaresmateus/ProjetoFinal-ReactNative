import React from "react"
import { ScrollView, Text, TextInput } from "react-native"
import { styles } from "./style"

export const Register = () => {
    return(
        <ScrollView style={styles.container}> 
            <TextInput placeholder="Nome completo" />
            <TextInput placeholder="Cpf" />
            <TextInput placeholder="Nome completo" />
            <TextInput placeholder="Nome completo" />
            <TextInput placeholder="Nome completo" />
            <Text>Register!</Text>
            
        </ScrollView>
    )
}