import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ModalProps, ActivityIndicator, Image, Touchable, TouchableOpacity } from "react-native";
import { styles } from './styles';
import { getProdutoEspecifico, listaProdutos, produtoProps } from '../../../services/api';
import { CarrinhoContexto } from '../../../contexts/CartContext';
import { Botao } from "../../Botao";



interface ModalProductProps extends ModalProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
  


}

export const ModalProduct = ({ id, modal, setModal, ...rest }: ModalProductProps) => {

  const [produtoEspecifico, setProdutoEspecifico] = useState<produtoProps>();
  const [carregando, setCarregando] = useState<boolean>(true);

  useEffect(() => {

    getProdutoEspecifico(id).then((res) => {
      setProdutoEspecifico(res.data)

    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setCarregando(false)
    })
  }, []);

  const salvaListaProdutos = useContext(CarrinhoContexto).salvaListaProdutos
  const removeProdutoCarrinho = useContext(CarrinhoContexto).removeProdutoCarrinho

  function addProdutoNoCarrinho() {
    let produto: listaProdutos = {

      id: produtoEspecifico.id,
      nome: produtoEspecifico.nome,
      valor: produtoEspecifico.valor,
      fotoLink: produtoEspecifico.fotoLink
    }
    salvaListaProdutos(produto)
    setModal(false);
  }


  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setModal(!modal);
        }}
        {...rest}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {carregando ?
              <ActivityIndicator size={'large'}
              />
              :
              <>

                <View style={styles.popUp}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModal(false)}
                >
                  <Text style={styles.textStyle}>X</Text>
                </Pressable>
                  <Image style={styles.image}
                    source={{ uri: produtoEspecifico.fotoLink }} />

                  <Text style={styles.modalTextNome}> Produto: {produtoEspecifico.nome} </Text>
                  <Text style={styles.modalTextDescricao}> Descrição: {produtoEspecifico.descricao} </Text>

                  <Text style={styles.modalTextQtd}> Quantidade estoque: {produtoEspecifico.qtdEstoque} </Text>
                  <Text style={styles.modalTextValor}> Valor: R$ {produtoEspecifico.valor},00 </Text>

                 


                  <View> 

                  <Botao
                      title='Comprar'
                      onPress={addProdutoNoCarrinho}
                      activeOpacity={0.9}
                      
                      />
                    <Botao
                      title='Remover do Carrinho'
                      onPress={() => removeProdutoCarrinho(id)}
                      onPressOut={() => setModal(false)}
                      activeOpacity={0.9}
                      
                      />
                      </View>

                  
              

                </View>

               
              </>
            }
          </View>
        </View>
      </Modal>

    </View>
  );
};

