import styled from 'styled-components';

export const Background = styled.View`
    flex: 1;
    background-color:  #4B0082;
`;

export const Container = styled.View`
    margin-left: 15px;
    margin-bottom: 25px;
`;

export const Name = styled.Text`
    font-size: 19px;
    color: #FFF;
    font-style: italic;
`;

export const Saldo = styled.Text`
    margin-top: 5px;
    font-size: 30px;
    color: #FFF;
    font-weight: bold;
`;

export const Title = styled.Text`
    color: #00b94a;
    margin-bottom: 10px;
`;

export const Area = styled.View`
    flex-direction: row;
    margin: 0 20px 0 15px;
    align-items: baseline;
    justify-content: space-between;
`;

export const List = styled.FlatList.attrs({
    marginHorizontal: 15
})`
    padding-top: 15px;
    background-color: #FFF;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    margin-left: 8px;
    margin-right: 8px;
`;

export const ButtonFlotter = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #00b94a;
    width: 60px;
    height: 60px;
    border-radius: 50;
    position: absolute;
    right: 20px;
    bottom: 20px;    
`;
