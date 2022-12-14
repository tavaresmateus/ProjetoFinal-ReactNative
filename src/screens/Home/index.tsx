import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, Image, Text, View, TouchableOpacity } from 'react-native';
import { getProdutos, listaProdutos, produtoProps } from '../../services/api'
import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { ProdutoCard } from '../../components/ProdutoCard';
import { ModalProduct } from '../../components/Modais/ModalStats';

export function Shopee() {
    const [carregando, setCarregando] = useState<boolean>(false);
    const [listaProdutos, setListaProdutos] = useState<listaProdutos[]>([]);
    const [produtoEspecifico, setProdutoEspecifico] = useState<produtoProps>();
    const [indexSelecionado, setIndexSelecionado] = useState<number>(0);
    const [modal, setModal] = useState<boolean>(false);




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

        <View style={styles.container}>

            <FontAwesome name="shopping-bag" size={24} color="black" />

            <Text style={styles.NomeTela}>MarketPlace </Text>
            {carregando ?
                <ActivityIndicator
                    size={'large'} />
                :
                <FlatList
                    numColumns={2}
                    style={styles.listas}

                    data={listaProdutos}
                    keyExtractor={(id, index) => index.toString()}
                    renderItem={({ item }) => {
                        return (

                            <ProdutoCard
                                produto={item}
                                setIndexSelecionado={setIndexSelecionado}
                                setModal={setModal} 
                              />

                        )
                    }}

                />
            }
            {modal &&
                <ModalProduct
                    id={indexSelecionado} 
                    modal={modal} 
                    setModal={setModal}
                     />
            }
        </View>
    )

}