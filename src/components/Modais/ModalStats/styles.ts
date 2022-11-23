import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({

    centeredView: {
      
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      
      backgroundColor: "white",
      borderRadius: 20,
      padding: 80,
      marginTop: 200,      
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 8,
      shadowRadius: 4,
      
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      
    },
    
    buttonOpen: {
      backgroundColor: "green",
      marginLeft: 5,
            
    },
    buttonClose: {
      backgroundColor: "grey",
      shadowOpacity: 5,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",      
    },

    modalText: {
      marginBottom: 15,
      textAlign: "center",
      position: "relative",   
      fontWeight: "bold",
      
    }
  });