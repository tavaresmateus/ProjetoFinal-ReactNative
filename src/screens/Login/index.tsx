import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react';
import { Text, View, StatusBar, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';
import { useAuth } from '../../contexts/Auth';
import { propsAuthStack, propsNavigationAuthStack } from '../../routes/AuthStack/Models';
import { propsStack } from '../../routes/Stack/Models';
import { styles } from "./styles";
import { Register } from '../Register';

export const Login = () => {
    const {signIn} = useAuth();
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const navigation = useNavigation();
    return(
        <>
        <StatusBar
        barStyle="light-content" backgroundColor={"#2F4676"}
      />
        
        <View style={styles.container}>
            
            <View>
                 <ImageBackground source={require("../../assets/imgs/elipse.png")} style={styles.image}>
                 
                 <View style={styles.boxImageTitle}>
                    <Image source={require("../../assets/imgs/serrashop.png")} style={styles.imageTitle}/>
                </View></ImageBackground>
            </View>

            
            
            
            <View style={styles.viewLogin}>
                
                <TextInput placeholder='Nome de usuario' style={styles.inputLogin} value={email}  placeholderTextColor="grey" onChangeText={setEmail}/>
                
                <TextInput placeholder='Senha' style={styles.inputLogin} value={password} placeholderTextColor="grey" secureTextEntry onChangeText={setPassword}/>
                
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
                        N??o tem cadastro?
                </Text>            
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.registerTextButton}>
                        Cadastrar
                    </Text>  
                </TouchableOpacity>
            </View>
            
        </View>
        </>
    )
}