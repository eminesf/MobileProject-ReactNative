import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { getList } from './service/list'
import api from './service/Api'

import Lista from './components/Lista';
import ListaTwo from './components/ListaTwo';
import { ScrollView } from 'react-native';

interface ProdutosModel {
  id: number;
  ean: number;
  name: string;
}

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
      console.log(items.data);
      setList(items.data.payload);
    })
  }


  useEffect(() => {
    trazLista()
  }, [])


  return (
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