import styled from 'styled-components/native';


export const Background = styled.View`
    flex: 1;
    background-color: #4B0082;
`; 
export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(0,0,0, 0.3)'
})`
    height: 50px;
    width: 90%;
    background-color: rgba(255, 255, 255, 0.8);
    margin-top: 20px;
    font-size: 17px;
    padding-left: 10px;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
    height: 50px;
    width: 90%;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: #32cd32;

`;

export const SubmitText = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #FFF;
`;