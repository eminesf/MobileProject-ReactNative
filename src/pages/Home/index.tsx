import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { ProdutosModel } from '../../model/ProdutosModel';
import api from '../../service/Api';
import Lista from '../../components/Lista';
import Header from '../../components/Header';

import { 
    HeaderText 
} from './styles'



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
            <Header title="Produtos">
            </Header>
            <ScrollView>
                {list?.map(item => (
                    <Lista key={item.id} item={item} />
                ))}
            </ScrollView>
        </>
    );
}

export default Home;