import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000000;
  margin-top: 20px;
`;

export const Button = styled.TouchableOpacity`
  border: 1px;
  border-radius: 8px;
  padding: 10px;
  margin-top: 10px;
  background-color: #5d615f;
`;

export const TxtButton = styled.Text`
  color: #ffffff;
`;

export const TxtCoodenadas = styled.Text`
  color: #000000;
`;

export const TxtErro = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #ff0000;
`;
