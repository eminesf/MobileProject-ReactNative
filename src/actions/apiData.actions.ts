import { ProdutosModel } from '../model/ProdutosModel';

export function saveApiData(produtosModel: ProdutosModel[]) {
    return {
        type: 'ADD_API_DATA',
        payload: produtosModel
    }
}