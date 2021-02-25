import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

// import imgCart from '../../assets/images/carrinhoCompra.png'



import {
  ButtonBackContainer,
  HeaderContainer,
  TextContainer,
  TextHeader,
  ButtonIcon,
  CartContainer
} from './styles';

interface PageProps {
  title?: string;
  showGoBack?: boolean;
}

const Header: React.FC<PageProps> = ({ title, showGoBack }: PageProps) => {

  const { goBack } = useNavigation()

  return (
    <HeaderContainer>
      <ButtonBackContainer onPress={goBack}>
        {showGoBack && <ButtonIcon name="chevron-left" size={28} color="#FFF" />}
      </ButtonBackContainer>
      <TextContainer>
        <TextHeader>{title}</TextHeader>
      </TextContainer>
      <CartContainer>
        <Icon name="shopping-cart" size={28} color="#FFF" />
      </CartContainer>
    </HeaderContainer>
  );
}

export default Header;