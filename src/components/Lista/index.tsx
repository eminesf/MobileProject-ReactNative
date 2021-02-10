import React from 'react';
import {
    Container,
    NameProduct,
    EanProduct,
    ImageProduct,
    ContainerImage, 
    ContainerText
} from './styles';
import { PageProps } from '../../model/ProdutosModel'


const Lista: React.FC<PageProps> = ({ item }: PageProps) => {
    return (
        <Container>
            <ContainerImage>
                <ImageProduct source={{ uri: item?.images[0] }} />
            </ContainerImage>
            <ContainerText>
                <EanProduct>{item?.ean}</EanProduct>
                <NameProduct>{item?.name}</NameProduct>
            </ContainerText>
        </Container>
    );
}

export default Lista;