import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollViewComponent,
  ImageBackground,
} from "react-native";
import { styles } from "../Products/styles";
import mengo from "../../assets/imagens/fla1.png";
import mengao from "../../assets/imagens/fla2.png";
import { AntDesign } from "@expo/vector-icons";
import { ModalProduct } from "../../components/Modais/ModalStats";

export const Products = () => {
  return (

    
    <View style={styles.container}>
        
      <ImageBackground
        style={styles.bola1}
        source={require("../../assets/elipse.png")}
      >
        <Text style={styles.text}>Produtos</Text>
        <View style={styles.searchbar}>
          <TextInput
            style={styles.input}
            keyboardType={"default"}
            placeholder="Search"
          />
          <AntDesign name="search1" size={30} color="black" />
        </View>
      

      <View style={styles.colunas}>
      <ModalProduct/>
        <Image style={styles.imagePost} source={mengo} />
      </View>

      <View style={styles.colunas}>
      <ModalProduct/>
        <Image style={styles.imagePost2} source={mengo} />
      </View>

      <View style={styles.colunas}>
      <ModalProduct/>
        <Image style={styles.imagePost2} source={mengo} />
      </View>

      <View style={styles.colunas}>
      <ModalProduct/>
        <Image style={styles.imagePost2} source={mengo} />
      </View>

      
      <View style={styles.colunas}>
      <ModalProduct/>
        <Image style={styles.imagePost2} source={mengao} />
      </View> 
      </ImageBackground>
      
      <Text style={styles.text2}>Favoritos</Text>
            
    </View>
  );
};
