import axios, { AxiosResponse } from 'axios';


const apiEcommerce = axios.create({
    // baseURL: 'https://3b57-201-33-170-112.sa.ngrok.io/',

    baseURL: 'https://9f14-2804-56c-82b6-a600-84e8-8253-79ff-1fea.sa.ngrok.io/',


    
});

export interface listaProdutos {
    id: number,
    nome: string,
    valor: number,
    fotoLink: string,

}

// interface getProdutosRespostaProps {
//     count: number,
//     results: listaProdutos[]
// }

export function getProdutos() {
    let url = `produto/`;

    return apiEcommerce.get(url);

};

export interface produtoProps {

    dataFabricacao: string;
    descricao: string;
    fotoLink: string;
    id: number;
    idCategoria: number;
    idFuncionario: number;
    nome: string;
    nomeCategoria: string;
    nomeFuncionario: string;
    qtdEstoque: number;
    valor: number;
}




export function getProdutoEspecifico(id: number): Promise<AxiosResponse<produtoProps | any>> {
    let url = `produto/${id}`;

    return apiEcommerce.get(url);
};


