import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';


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
    justify-content: center;
    width: 15%;
    height: 100%;
`;

export const ButtonIcon = styled(Icon)`
    margin-left: 10px;
`;

export const CartContainer = styled.TouchableOpacity`
    width: 15%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export const CartIcon = styled.Image`
    width: 32px;
    height: 32px;
    
`;
