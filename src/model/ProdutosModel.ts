export interface ProdutosModel {
    id: number;
    ean: number;
    name: string;
    images: ImagemModel[];
    price: PriceModel;
}

export interface PageProps {
    item?: ProdutosModel;
    itens?: ProdutosModel[];
}

export interface ImagemModel {
    image: string[];
}

export interface PriceModel {
    originalPrice: number;
    dealPrice: number;
    percentage: number;
}