import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { onRequest } from "../../services/api"
import { styles } from "./style"

export const Register = () => {
    const[nome, setnome] = useState<string>("");
    const[cpf, setcpf] = useState<string>("");
    
    return(
        <View style={styles.container}> 
        
            <View style={styles.boxTitle}>
                <Text style={{fontSize:20}}>
                    CADASTRO
                </Text>
            </View>
        
            
            <View style={styles.boxInput}>
                <TextInput placeholder="Nome completo" value={nome} style={styles.inputText} onChangeText={ setnome}/>
                <TextInput placeholder="Cpf"style={styles.inputText} value={cpf} onChangeText={setcpf}/>
                <TextInput placeholder="Email"style={styles.inputText} />
                <TextInput placeholder="Senha"style={styles.inputText} />
                <TouchableOpacity style={styles.buttonRegister} onPress={()=>onRequest(nome, cpf)}>
                    <Text style={styles.textButtonRegister}>Register!</Text>
                </TouchableOpacity>
                
            </View>
            
            
        </View>
    )
}