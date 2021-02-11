import React from 'react';
import { View } from 'react-native';

import {
  Container,
  TextHeader
} from './styles';

interface PageProps {
  title?: string;
}

const Header: React.FC <PageProps> = ({ title }: PageProps) => {
  return (
    <Container>
      <TextHeader>{title}</TextHeader>
    </Container>
  );
}

export default Header;