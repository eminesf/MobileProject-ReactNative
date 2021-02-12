import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';


export const ContainerImage = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
`;

export const ImageProduct = styled.Image`
    width: 100%;
    height: 300px;
    background-color: #ddd;
`;

export const Container = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
    align-self: center;
    font-size: 25px;
`;

export const DescriptionProduct = styled.Text`
    font-size: 17px;
    font-family: serif;
`;

export const ContainerDescription = styled.View`
    border-color: gray;
    border-width: 1px;
    margin: 0px 15px;
`;

export const ContanerTitlePrice = styled.View`
    margin: 10px;
`;

export const PriceTitlePrice = styled.Text`
    font-size: 25px;
`;

export const ContainerPriceValor = styled.View`
    flex-direction: row;    
`;

export const ContainerPrices = styled.View`
    width: 50%;
    margin-left: 10px;
`;


export const TotalPriceContainer = styled.View`
    margin: 10px;
    align-items: center;
`;
export const TotalPriceView = styled.Text`
    color: black;
    font-size: 28px;
`;

export const TotalProductsContainer = styled.View`
    margin: 10px;
    flex-direction: row;
    height: 65px;
    align-items: center;
    justify-content: center;
`;

export const AddProductContainer = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    margin-right: 15%;
    height: 100%;
    width: 90px;
    
`;
export const AddProductIcon = styled(Icon)``;

export const TotalProductContainerText = styled.View`
    align-items: center;
    justify-content: center;
`;

export const TotalProductsText = styled.Text`
    color: black;
    font-size: 50px;
`;

export const RemoveProductContainer = styled.TouchableOpacity`
align-items: center;
    justify-content: center;
    margin-left: 15%;
    height: 100%;
    width: 90px;
`;
export const RemoveProductIcon = styled(Icon)``;

