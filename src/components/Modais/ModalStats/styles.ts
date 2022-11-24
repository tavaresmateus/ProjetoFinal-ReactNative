import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({

    centeredView: {
      
      justifyContent: "center",
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      height: '100%',
    },
    modalView: {
      margin: 10,
      
      backgroundColor: "#FCFCFC",
      borderRadius: 20,
      padding: 60,
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 8,
      shadowRadius: 4,
      
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      marginTop: 50,
      
    },
    
    
    buttonClose: {
      backgroundColor: "green",
      shadowOpacity: 5,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center", 
      padding: 5,
    },

    popUp:{
      justifyContent: "center",
      alignItems: 'center',

    },

   

    modalTextNome:{
      marginTop: 40,  
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',


    },

    modalTextDescricao:{
        textAlign: 'center',
        fontSize: 20,
        marginTop: 5,


    },

    modalTextQtd:{
        fontSize: 20,
        marginTop: 5,
    },
    
    modalTextValor:{
      marginTop: 40,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
    },

    image: {
      width: 190,
      height: 170,
      borderRadius: 10,
      alignContent: 'center',
      justifyContent: 'center',
     
      
    
    },
  });