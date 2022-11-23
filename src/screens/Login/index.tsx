import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react';
import { Text, View, StatusBar, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';
import { useAuth } from '../../contexts/Auth';
import { propsAuthStack } from '../../routes/AuthStack/Models';
import { propsStack } from '../../routes/Stack/Models';
import { styles } from "./styles";

export const Login = () => {
    const {signIn} = useAuth();
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

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
                
                <TextInput placeholder='Nome de usuario' style={styles.inputLogin} value={email}  placeholderTextColor="grey" onChangeText={setEmail}/>
                
                <TextInput placeholder='Senha' style={styles.inputLogin} value={password} placeholderTextColor="grey" onChangeText={setPassword}/>
                
                <TouchableOpacity style={styles.buttonLogin} onPress={() => signIn(email,password)}>
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