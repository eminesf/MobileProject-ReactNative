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
import { useNavigation } from '@react-navigation/native';


const Lista: React.FC<PageProps> = ({ item }: PageProps) => {
    const pencentage = item?.price.percentage;
    const originalPrice = item?.price.originalPrice;
    let finalPrice: any;
    if(pencentage == null){
        finalPrice = originalPrice;
    } else {
        finalPrice = (1 - (pencentage / 100)) * originalPrice;
    }
    

    const { navigate } = useNavigation()
    return (
        <PrincipalContainer onPress={() => navigate('PageDetails', { id: item?.id, name: item?.name })}>
            <Container>
                <ContainerImage>
                    <ImageProduct source={{ uri: item?.images[0] }} />
                </ContainerImage>
                <ContainerText>
                    <EanProduct>{item?.ean}</EanProduct>
                    <NameProduct>{item?.name}</NameProduct>
                    <PriceProduct>Preço original: R${originalPrice}</PriceProduct>
                </ContainerText>
            </Container>
            <ContainerPrice>
                {item?.price.percentage && <Discount>Desconto: -{pencentage}%</Discount>}
                <DealPrice>Preço final: R$ {finalPrice.toFixed(2)}</DealPrice>
            </ContainerPrice>
        </PrincipalContainer>
    );
}

export default Lista;