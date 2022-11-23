import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, Image, Text, View, TouchableOpacity } from 'react-native';
import { getProdutos, listaProdutos } from '../../services/api'
import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons';


export function Shopee() {
    const [carregando, setCarregando] = useState<boolean>(false);
    const [listaProdutos, setListaProdutos] = useState<listaProdutos[]>([]);


    useEffect(() => {
        requisicaoListaProdutos();
    }, []);

    function requisicaoListaProdutos() {
        getProdutos().then((res) => {
            console.log(res.data)
            setListaProdutos(res.data)
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setCarregando(false);
        });
    }


    return (

        <View style={styles.container}>
            
            <FontAwesome name="shopping-bag" size={24} color="black" />
            
            <Text style={styles.NomeTela}>MarketPlace </Text>
            {carregando ?
            <ActivityIndicator
            size={'large'}/>
            :
            <FlatList 
            numColumns={2}
            style={styles.listas}
                
            data={listaProdutos}
            keyExtractor={item => item.index}
            renderItem={({item}) =>{
                return (
                

             
                   <TouchableOpacity style={styles.cardProduct}>
                   
                   <Text style={styles.nomeProduto}>{item.nome}</Text>
                    <Image style={styles.image}
                     source={{uri:item.fotoLink} } />

                     <Text style={styles.precoProduto}> R$ {item.valor},00</Text>

                        </TouchableOpacity>
                   

                       
              
                )
            }}
            
            />    
        }
        </View>
 )

}