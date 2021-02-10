import React from 'react';
import { ProdutosModel } from '../../model/ProdutosModel'

import {
  Container,
  NameProduct,
  EanProduct
} from './styles';

interface PageProps {
  itens: ProdutosModel[];
}

const ListaTwo: React.FC<PageProps> = ({ itens }: PageProps) => {
  return (
    <Container>
      {
        itens?.map(it => (
          <Container key={it.id}>
            <EanProduct>{it.ean}</EanProduct>
            <NameProduct>{it.name}</NameProduct>
          </Container>
        ))
      }
    </Container>
  );
}

export default ListaTwo;