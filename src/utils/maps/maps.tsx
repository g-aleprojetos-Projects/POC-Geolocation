import React from 'react';
import * as S from './maps.styles';

type Props = {
  latitude: number;
  longitude: number;
};
export const Maps = (props: Props) => {
  const {latitude, longitude} = props;

  return (
    <S.Container>
      <S.MapsView
        loadingEnabled={true}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        showsUserLocation={true}
      />
    </S.Container>
  );
};
