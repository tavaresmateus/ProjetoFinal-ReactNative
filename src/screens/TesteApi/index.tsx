import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { getProdutos, listaProdutos } from '../../services/api'



export function Shopee() {
    const [carregando, setCarregando] = useState<boolean>(false);
    const [listaProdutos, setListaProdutos] = useState<listaProdutos[]>([]);


    useEffect(() => {
        requisicaoListaProdutos();
    }, []);

    function requisicaoListaProdutos() {
        getProdutos().then((res) => {
            setListaProdutos(res.data)
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setCarregando(false);
        });
    }


    return (

        <View>
            <Text>
                Loja de Produtos
            </Text>
            {carregando ?
            <ActivityIndicator
            size={'large'}/>
            :
            <FlatList
                
            data={listaProdutos}
            keyExtractor={item => item.index}
            renderItem={({item}) =>{
                return (
                   <Text>
                    {item.nome}
                   </Text>
                )
            }}
            
            />    
        }
        </View>
 )

}