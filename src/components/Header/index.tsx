import React from 'react';
import { View } from 'react-native';

import {
  ButtonBackContainer,
  HeaderContainer,
  TextContainer,
  TextHeader,
  ButtonIcon,
  CartContainer,
  CartIcon

} from './styles';

interface PageProps {
  title?: string;
}

const Header: React.FC<PageProps> = ({ title }: PageProps) => {
  return (
    <HeaderContainer>
      <ButtonBackContainer>
        <ButtonIcon></ButtonIcon>
      </ButtonBackContainer>
      <TextContainer>
        <TextHeader>{title}</TextHeader>
      </TextContainer>
      <CartContainer>
        <CartIcon></CartIcon>
      </CartContainer>
    </HeaderContainer>
  );
}

export default Header;