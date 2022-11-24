import React from 'react';
import { Text, TouchableOpacityProps, TouchableOpacity, Image } from "react-native";
import { listaProdutos } from '../../services/api';
import { styles } from './styles';


interface ProdutoCardProps extends TouchableOpacityProps {
    produto: listaProdutos;
    setModal:React.Dispatch<React.SetStateAction<boolean>>;
    setIndexSelecionado: React.Dispatch<React.SetStateAction<number>>;


}
    export const ProdutoCard = ({produto, setModal, setIndexSelecionado} : ProdutoCardProps) => {
       
        function abreModal () {
            setIndexSelecionado(produto.id);
            setModal(true);
        } 

        return (

            <TouchableOpacity onPress={abreModal} style={styles.buttonProdutoItem}>

            <Text style={styles.textProdutoItem}>
                {produto.nome}
            </Text>
          
            </TouchableOpacity>
        )
    }
