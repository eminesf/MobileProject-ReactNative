import React from 'react';
import { 
    Container, 
    NameProduct, 
    EanProduct 
} from './styles';

interface ProdutosModel {
    id: number;
    ean: number;
    name: string;
}

interface PageProps {
    item: ProdutosModel;
}

const Lista: React.FC<PageProps> = ({ item }: PageProps) => {
    return (
        <Container>
            <EanProduct>{item.ean}</EanProduct>
            <NameProduct>{item.name}</NameProduct>
        </Container>
    );
}

export default Lista;