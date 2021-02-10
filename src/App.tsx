import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import api from './service/Api'

import Lista from './components/Lista';
import ListaTwo from './components/ListaTwo';
import { ScrollView } from 'react-native';
import { ProdutosModel } from './components/model/ProdutosModel';

export const Title = styled.Text`
  font-size: 24px;
  background-color: gray;
  padding: 16px;
  color: #FFF;
  text-align: center;
`; 

const App = () => {
  const [list, setList] = useState<ProdutosModel[]>([]);

  const trazLista = async () => {
    await api.get('/items').then(items => { 
      setList(items.data.payload);
    })
  }


  // promisse
  useEffect(() => {
    trazLista()
  }, [])


  return (
    // componente pai não nomeado
    // Scroll view serve para fazer a o roll da tela
    // o ? como se fosse um elvis operator 
    <>      
      <ScrollView>
        <Title>Lista 1</Title>
        {list?.map(item => (
          <Lista key={item.id} item={item} />
        ))}

        <Title>Lista 2</Title>
        <ListaTwo itens={list} />
      </ScrollView>
    </>
  );
};


export default App;