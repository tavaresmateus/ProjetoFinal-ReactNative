import React from 'react';
import { Text, TouchableOpacityProps, TouchableOpacity, Image, ModalProps } from "react-native";
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

            <TouchableOpacity onPress={abreModal} style={styles.cardProduct}>
                
                <Text style={styles.nomeProduto}>{produto.nome}</Text>
                <Image style={styles.image} 
                 source={{uri: produto.fotoLink}}   />

                 <Text style={styles.precoProduto}> R$ {produto.valor},00 </Text>
            
            </TouchableOpacity>
        )
    }
