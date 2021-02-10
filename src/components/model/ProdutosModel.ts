export interface ProdutosModel {
    id: number;
    ean: number;
    name: string;
}

export interface PageProps {
    itens: ProdutosModel[];
}