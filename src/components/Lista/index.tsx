import React from 'react';
import {
    Container,
    NameProduct,
    EanProduct,
    ImageProduct,
    ContainerImage,
    ContainerText,
    ContainerPrice,
    PriceProduct,
    DealPrice,
    Discount,
    PrincipalContainer
} from './styles';
import { PageProps } from '../../model/ProdutosModel'


const Lista: React.FC<PageProps> = ({ item }: PageProps) => {
    return (
        <PrincipalContainer>
            <Container>
                <ContainerImage>
                    <ImageProduct source={{ uri: item?.images[0] }} />
                </ContainerImage>
                <ContainerText>
                    <EanProduct>{item?.ean}</EanProduct>
                    <NameProduct>{item?.name}</NameProduct>
                </ContainerText>
            </Container>
            <ContainerPrice>
                <PriceProduct>Preço original: R${item?.price.originalPrice}</PriceProduct>
                <Discount>Desconto: -{item?.price.percentage}%</Discount>
                <DealPrice>Com desconto: R$ {item?.price.dealPrice}</DealPrice>
            </ContainerPrice>
        </PrincipalContainer>
    );
}

export default Lista;