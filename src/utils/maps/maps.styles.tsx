import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
  margin: 10px;
  padding: 30px;
  background-color: black;
`;

export const MapsView = styled(MapView)`
  width: 100%;
  height: 400px;
`;
