import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { ProdutosModel } from '../../model/ProdutosModel';
import api from '../../service/Api';
import Lista from '../../components/Lista';

export const Title = styled.Text`
  font-size: 24px;
  background-color: gray;
  padding: 16px;
  color: #FFF;
  text-align: center;
`;


const Home: React.FC = () => {
    const [list, setList] = useState<ProdutosModel[]>([]);

    const trasLista = async () => {
        await api.get('/items').then(items => {
            setList(items.data.payload);
        })
    }


    // promisse
    useEffect(() => {
        trasLista()
    }, []);

    return (
        // componente pai não nomeado
        // Scroll view serve para fazer a o roll da tela
        // o ? como se fosse um elvis operator 
        <>
            {/* <Header>Lista de Produtos</Header> */}
            <ScrollView>
                <Title>Lista 1</Title>
                {list?.map(item => (
                    <Lista key={item.id} item={item} />
                ))}
            </ScrollView>
        </>
    );
}

export default Home;