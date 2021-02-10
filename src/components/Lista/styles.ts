import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    padding: 8px;
    align-items: center;
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