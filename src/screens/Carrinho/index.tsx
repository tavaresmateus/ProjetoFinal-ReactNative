import React, { useContext, useState } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { styles } from "./styles";
import { listaProdutos } from "../../services/api";
import { ModalProduct } from "../../components/Modais/ModalStats";
import { ProdutoCard } from "../../components/ProdutoCard";
import { CarrinhoContexto } from "../../contexts/CartContext";
import { FontAwesome } from '@expo/vector-icons';



export const Carrinho = () => {

    const listaProdutos = useContext(CarrinhoContexto).listaProdutos
    const precoTotal = useContext(CarrinhoContexto).precoTotal

    const [indexSelecionado, setIndexSelecionado] = useState<number>(0);
    const [precoSelecionado, setPrecoSelecionado] = useState<number>(0);
    const [modal, setModal] = useState<boolean>(false);

    return (
        <View style={styles.container}>

          
            <FontAwesome name="shopping-cart" 
            style={styles.carrinhoIcon}
            size={30}  />
            
            <Text style={styles.title}>Carrinho</Text>

            <FlatList
                numColumns={1}
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
             <View style={styles.containerPreco}>
                
                <Text style={styles.rodape}>
                  Preço total:  R$ {precoTotal},00
                </Text>
            </View>

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