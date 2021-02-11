import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import api from '../../service/Api'

import { ScrollView, Text } from 'react-native';
import { ProdutosModel } from '../../model/ProdutosModel';


import {
    Container,
    Header,
    CartMarket,
    Title,
    ImageProduct,
    DescriptionProduct,
    ContainerDescription,
    ContanerTitlePrice,
    PriceTitlePrice,
    ContainerPriceValor,
    ContainerPrices
} from './styles';

interface RouteParams {
    id: number;
    
}

const PageDetails = () => {
    const { params } =  useRoute();
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



    return (
        <>
            <ScrollView>
                <Header>
                    <CartMarket></CartMarket>
                </Header>
                <Container>
                    <ImageProduct source={{ uri: product?.images[0] }} />
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
                            <Text>De: R$ {product?.price.originalPrice}</Text>
                        </ContainerPrices>
                        <ContainerPrices>
                            <Text>Por: R$ {product?.price.dealPrice}</Text>
                        </ContainerPrices>
                    </ContainerPriceValor>
                </>
            </ScrollView>
        </>
    );
}

export default PageDetails;