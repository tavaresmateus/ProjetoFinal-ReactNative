import React, { useEffect } from "react";
import { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ModalProps, ActivityIndicator, Image } from "react-native";
import { styles } from './styles';
import { getProdutoEspecifico, produtoProps } from '../../../services/api'


interface ModalProductProps extends ModalProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;


}

export const ModalProduct = ({id, modal,setModal, ...rest } : ModalProductProps) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [produtoEspecifico, setProdutoEspecifico] = useState<produtoProps>();
  const [carregando, setCarregando] = useState<boolean>(true);

  useEffect(() => {

    getProdutoEspecifico(id).then((res) => {
        setProdutoEspecifico(res.data)
    
    }).catch((err) => {
      console.log(setProdutoEspecifico);
    }).finally(() => {
      setCarregando(false)
    })
  }, []);




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
            <Image style={styles.image} 
                 source={{uri: produtoEspecifico.fotoLink}}/>

            <Text style={styles.modalTextNome}> Produto: {produtoEspecifico.nome} </Text>
            <Text style={styles.modalTextDescricao}> Descrição: {produtoEspecifico.descricao} </Text>

            <Text style={styles.modalTextQtd}> Quantidade estoque: {produtoEspecifico.qtdEstoque} </Text>
            <Text style={styles.modalTextValor}> Valor: R$ {produtoEspecifico.valor},00 </Text>



            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModal(false)}
              >
              <Text style={styles.textStyle}>X</Text>
            </Pressable>
                </>
      }
          </View>
        </View>
      </Modal>
      {/* <Pressable
      style={[styles.button, styles.buttonOpen]}
      onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Ver mais</Text>
      </Pressable> */}
  
    </View>
  );
};

