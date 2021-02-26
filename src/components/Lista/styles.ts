import styled from 'styled-components/native';

export const PrincipalContainer = styled.TouchableOpacity`
    flex-direction: row;
    height: 100px;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border: #ddd;
    background-color: #fff;
    border-radius: 15px;
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
    font-size: 9px;
    color: gray;
`;

export const ImageProduct = styled.Image`
    width: 59px;
    height: 59px;
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
    justify-content: center;
    
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



