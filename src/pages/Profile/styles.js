import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color:  #4B0082;
    align-items: center;
`;

export const Name = styled.Text`
    text-align: center;
    font-size: 30px;
    margin-top: 25px;
    margin-bottom: 25px;
    color: #FFF;
`;

export const NewLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background-color: #00b94a;
    width: 90%;
    height: 45px;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    margin-bottom: 10px;
`;

export const NewText = styled.Text`
    font-size: 18px;
    color: #FFF;
    font-weight: bold;
`;

export const Logout = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background-color: #B22222;
    width: 90%;
    height: 45px;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    margin-bottom: 10px;
`;

export const LogoutText = styled.Text`
     font-size: 18px;
    color: #FFF;
    font-weight: bold;
`;