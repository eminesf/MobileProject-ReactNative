import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
    flex-direction: row;
    background-color: #f4511e;
    width: 100%;
    height: 55px;
    margin-top: 24px;
    border-bottom-color: black;
`;

export const TextContainer = styled.View`
    width: 70%;
    align-items: center;
    justify-content: center;
`;
    

export const TextHeader = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: bold;
`;

export const ButtonBackContainer = styled.TouchableOpacity`
    background-color: red;
    width: 15%;
    height: 100%;
`;

export const ButtonIcon = styled.Image``;

export const CartContainer = styled.TouchableOpacity`
    width: 15%;
    background-color: red;
    height: 100%;
`;

export const CartIcon = styled.Image``;
