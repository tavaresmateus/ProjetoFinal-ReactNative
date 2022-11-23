import axios, { AxiosResponse } from 'axios';


 const apiEcommerce = axios.create({
    baseURL: 'http://localhost:8080/',
});

export interface listaProdutos {
    index: string,
    nome: string,
    valor: number,
    fotoLink: string,

}

interface getProdutosRespostaProps {
    count: number,
    results: listaProdutos[]
}

export function getProdutos(): Promise<AxiosResponse<getProdutosRespostaProps, any>> {
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




export function getProdutoEspecifico(index: string): Promise<AxiosResponse<produtoProps | any>> {
    let url = `produto/${index}`;

    return apiEcommerce.get(url);
};

export default apiEcommerce;

