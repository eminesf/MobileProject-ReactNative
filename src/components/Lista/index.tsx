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
                </ContainerText>
            </Container>
            <ContainerPrice>
                <PriceProduct>Preço original: R${item?.price.originalPrice}</PriceProduct>
                {item?.price.percentage && <Discount>Desconto: -{item?.price.percentage}%</Discount>}
                {item?.price.dealPrice && <DealPrice>Com desconto: R$ {item?.price.dealPrice}</DealPrice>}
            </ContainerPrice>
        </PrincipalContainer>
    );
}

export default Lista;