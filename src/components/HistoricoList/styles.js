import styled from 'styled-components/native';

export const Container = styled.View`
    margin-bottom: 5px;
    padding: 10px;
    box-shadow: 4px 4px rgba(0,0,0, 0.40);
    background-color: rgba(0,0,0, 0.1);
`;
export const Tipo = styled.View`
    flex-direction: row;
`;
export const IconView = styled.View`
    flex-direction: row;
    background-color: ${props => props.tipo === 'despesa' ? '#C62c36' : '#049301' };
    padding-bottom: 3px;
    padding-top: 3px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 7px;
`;
export const TipoText = styled.Text`
    color: #FFF;
    font-size: 14px;
    font-style: italic;
`;
export const ValorText = styled.Text`
    color: #222;
    font-size: 20px;
    font-weight: bold;
`;
export const AreaDesc = styled.View`
    flex-direction: row;
`;

export const DescTitle = styled.Text`
    color: rgba(0,0,0, 0.3);
    font-size: 14px;
    font-weight: bold;
`;
export const TextoDesc = styled.Text`
    color: rgba(0,0,0, 0.3);
    font-size: 12px;
  

`;