import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, StatusBar, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';
import { propsAuthStack } from '../../routes/AuthStack/Models';
import { propsStack } from '../../routes/Stack/Models';
import { styles } from "./styles";

export const Login = () => {

    

    return(
        <>
        <StatusBar
        barStyle="light-content" backgroundColor={"#2F4676"}
      />
        
        <View style={styles.container}>
            
            <View>
                 <ImageBackground source={require("../../assets/imgs/elipse.png")} style={styles.image}><Text>Login Account</Text></ImageBackground>
            </View>

            <Text style={styles.title}>SERRA </Text>
            
            <View style={styles.viewLogin}>
                
                <TextInput placeholder='Nome de usuario' style={styles.inputLogin} placeholderTextColor="grey"/>
                
                <TextInput placeholder='Senha' style={styles.inputLogin}  placeholderTextColor="grey"/>
                
                <TouchableOpacity style={styles.buttonLogin}>
                <Text style={styles.textButtonLogin}>
                    Entrar
                </Text>

            </TouchableOpacity>
            </View>

            <Text style={styles.textSignup}>_______________ Or sign up with _______________</Text>
            
            <View style={styles.boxAltLogin}>
                <TouchableOpacity>
                <Image source={require("../../assets/imgs/google.png")}/>    
                </TouchableOpacity>
                <TouchableOpacity>
                <Image source={require("../../assets/imgs/facebook.png")}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <Image source={require("../../assets/imgs/apple.png")}/>
                </TouchableOpacity>
                
            </View>

            <View style={styles.footer}>
                <Text style={styles.registerText}>
                        Não tem cadastro?
                </Text>            
                <TouchableOpacity>
                    <Text style={styles.registerTextButton}>
                        Cadastrar
                    </Text>  
                </TouchableOpacity>
            </View>
            
        </View>
        </>
    )
}