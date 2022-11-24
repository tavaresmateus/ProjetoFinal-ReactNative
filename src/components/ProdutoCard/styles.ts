import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    buttonProdutoItem: {
        backgroundColor: '#1f1e25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 5,
        flexDirection: "row",
        justifyContent: "space-between"
    },
  
    closeIcon: {
        tintColor: '#fff',
        height: 25,
        width: 25
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
})