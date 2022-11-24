import React, { createContext, useEffect, useState } from "react";
import { listaProdutos } from "../../services/api";

import AsyncStorage from '@react-native-async-storage/async-storage';

interface ProvedorCarrinhoProps {
    children: React.ReactNode
}

interface CarrinhoContextoProps {
    listaProdutos: listaProdutos[];
    salvaListaProdutos: (produto: listaProdutos) => void
    precoTotal: number;
    removeProdutoCarrinho: (id: number) => void
}

export const CarrinhoContexto = createContext<CarrinhoContextoProps>({
    listaProdutos: [{
        id: 0,
        nome: "",
        valor: 0,
        fotoLink: '',


    }],
    salvaListaProdutos: (produto: listaProdutos) => { },
    precoTotal: 0,
    removeProdutoCarrinho: (id: number) => { },
});

export const ProvedorCarrinho = ({ children }: ProvedorCarrinhoProps) => {
    const [listaProdutos, setListaProdutos] = useState<listaProdutos[]>([]);
    const [precoTotal, setPrecoTotal] = useState<number>(0);

    useEffect(() => {
        getData().then((res) => {
            setListaProdutos(res ? res : [])
        })
    }, [])

    useEffect(() => {
        let soma = 0;
        listaProdutos.length >= 1 && listaProdutos.map((produto: listaProdutos) => {
            soma = soma + Number(produto.valor)
        });
        setPrecoTotal(soma);
    }, [listaProdutos])

    const storeData = async (value: listaProdutos[]) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@itens_carrinho', jsonValue)
        } catch (e) {
            //saving error
        }
    }

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@itens_carrinho')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error readind value
        }
    }

    function salvaListaProdutos(produto: listaProdutos) {
        setListaProdutos([...listaProdutos, produto]);
        storeData([...listaProdutos, produto])
    };

    function removeProdutoCarrinho(id : number) {
        let novaListaProdutos = listaProdutos.filter((produto) =>{
            return produto.id !== id
        })
        setListaProdutos(novaListaProdutos)
        storeData(novaListaProdutos)

        };

        return (
            <CarrinhoContexto.Provider
                value={{
                    listaProdutos,
                    salvaListaProdutos,
                    precoTotal,
                    removeProdutoCarrinho
                    
                }}
                >
                    {children}
            </CarrinhoContexto.Provider>
        )
    }

