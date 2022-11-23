import React, {createContext, useContext, useEffect, useState} from 'react';
import { authService } from '../../services/auth';
import {Alert} from 'react-native';

export interface Props {
    children: React.ReactNode;
  }
  

export interface AuthData{
    token: string;
    email: string;
    name: string;
}

interface AuthContextData{
    authData?: AuthData;
    signIn: (email: string, senha: string) => Promise<AuthData>;
    signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData,
);

export const AuthProvider = (props: Props) => {

    const[authData, setAuthData] = useState<AuthData>();
    
    async function signIn(email: string, password:string): Promise<AuthData>{
        
        try{
            const auth = await authService.signIn(email, password);
            setAuthData(auth)
            return auth;
        }catch(error){
            Alert.alert(error.message, 'tente novamente')
        }
        
    }

    function signOut():Promise<void>{
        setAuthData(undefined)
        return;
    }

    return(
        <AuthContext.Provider value={{authData,signIn,signOut}}>{props.children}</AuthContext.Provider>
    ) 
    
}

export function useAuth(){
    const context =useContext(AuthContext)
    return context;
}