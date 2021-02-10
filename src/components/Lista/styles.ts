import styled from 'styled-components/native';

export const PrincipalContainer = styled.TouchableOpacity`
    flex-direction: row;
    border-color: black;
    border-bottom-width: 1px;
    border-bottom-color: #fff;
`;

export const Container = styled.View`
    flex-direction: row;
    padding: 8px;
    align-items: center;
    width: 60%;
`;

export const NameProduct = styled.Text`
    font-size: 18px;
    color: black;
`;

export const EanProduct = styled.Text`
    font-weight: bold;
    font-size: 10px;
    color: gray;
`;

export const ImageProduct = styled.Image`
    width: 48px;
    height: 48px;
    border-radius: 28px;
    background-color: #ddd;
    margin-right: 10px;
`;

export const ContainerImage = styled.View`
`;

export const ContainerText = styled.View`

`;

export const ContainerPrice = styled.View`
    align-items: flex-end;
    width: 40%;
    padding-right: 8px;
    
`;
export const PriceProduct = styled.Text`
    color: gray;
    font-size: 10px;
`;

export const Discount = styled.Text`
    color: black;
`;

export const DealPrice = styled.Text`
    color: red;
    font-size: 13px;
`;



