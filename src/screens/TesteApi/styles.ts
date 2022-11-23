import { Platform, StyleSheet,} from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex : 1,
      paddingTop: 50,
      alignItems: 'center',
      backgroundColor: 'lightgreen',
      opacity: 0.9,
     
    },

    NomeTela:{
      fontSize: 30,
      paddingBottom: 15,
    },

    listas:{
      paddingTop: 10,
      paddingLeft: 20,
      width: '100%',
    },

    nomeProduto:{
     paddingBottom: 4, 
     fontWeight: 'bold',

},

   precoProduto:{
    paddingTop: 4, 
    fontWeight: 'bold',
    color: 'black',


},

    cardProduct: {
                
        padding: 10,
        justifyContent: 'center',
        marginBottom: 10,
        
    },
    
    image: {
      width: 140,
      height: 80,
      borderWidth: 1.5,
      borderColor:'black',
      borderRadius: 10,
      
    
    },
    
}
)