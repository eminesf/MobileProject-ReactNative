import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';

import { useRoute, useNavigation } from '@react-navigation/native';
import { ScrollView, Text } from 'react-native';
import { ProdutosModel } from '../../model/ProdutosModel';

import api from '../../service/Api'
import Header from '../../components/Header';


import {
    ContainerImage,
    Container,
    Title,
    ImageProduct,
    DescriptionProduct,
    ContainerDescription,
    ContanerTitlePrice,
    PriceTitlePrice,
    ContainerPriceValor,
    ContainerPrices,
    TotalPriceContainer,
    TotalPriceView,
    TotalProductsContainer,
    AddProductIcon,
    RemoveProductIcon,
    TotalProductsText,
    TotalProductContainerText,
    AddProductContainer,
    RemoveProductContainer

} from './styles';

interface RouteParams {
    id: number;
}



const PageDetails: React.FC = () => {
    let totalProdutos: number = 0;
    const { params } = useRoute();
    const { id } = params as RouteParams;
    const [product, setProduct] = useState<ProdutosModel>();

    const trasProduto = async () => {
        await api.get(`/items/${id}`).then(item => {
            setProduct(item.data);
        })
    }

    useEffect(() => {
        trasProduto()
    }, [id]);

    const { reset,  } = useNavigation()

    return (
        <>
            <Header title={product?.name} showGoBack />
            <ScrollView>
                <ContainerImage>
                    <ImageProduct source={{ uri: product?.images[0] }} />
                </ContainerImage>
                <Container>
                    <Title key={product?.id}>{product?.name}</Title>
                    <ContainerDescription>
                        <DescriptionProduct>{product?.description}</DescriptionProduct>
                    </ContainerDescription>
                </Container>
                <>
                    <ContanerTitlePrice>
                        <PriceTitlePrice>
                            Price
                        </PriceTitlePrice>
                    </ContanerTitlePrice>
                    <ContainerPriceValor>
                        <ContainerPrices>
                            <Text>Valor original: R$ {product?.price.originalPrice}</Text>
                        </ContainerPrices>
                        <ContainerPrices>
                            {product?.price.dealPrice && <Text>Por: R$ {product?.price.dealPrice}</Text>}
                        </ContainerPrices>
                    </ContainerPriceValor>
                </>
                <TotalPriceContainer>
                    <TotalPriceView>Total R$ {}</TotalPriceView>
                </TotalPriceContainer>
                <TotalProductsContainer>
                    <AddProductContainer onPress={totalProdutos++}>
                        <AddProductIcon name="plus" size={50} color="#000" />
                    </AddProductContainer>
                    <TotalProductContainerText>
                        <TotalProductsText>{totalProdutos}</TotalProductsText>
                    </TotalProductContainerText>
                    <RemoveProductContainer onPress={reset}>
                        <RemoveProductIcon name="minus" size={50} color="#000" />
                    </RemoveProductContainer>
                </TotalProductsContainer>
            </ScrollView>
        </>
    );
}

export default PageDetails;