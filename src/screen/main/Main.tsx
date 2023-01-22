import React, {useCallback} from 'react';
import * as S from './Main.styles';
import {useGeolocation} from '../../utils/geolocation';
import {Maps} from '../../utils/maps/maps';

export const Main = () => {
  const {latitude, longitude, erro, handleUpdate} = useGeolocation();

  const handleButton = useCallback(() => {
    handleUpdate();
  }, [handleUpdate]);

  return (
    <S.Container>
      <S.Title>Geolocation</S.Title>
      {erro ? (
        <S.TxtErro>ERRO: {erro}</S.TxtErro>
      ) : (
        <>
          <S.TxtCoodenadas>Lagitude: {latitude}</S.TxtCoodenadas>
          <S.TxtCoodenadas>Longitude: {longitude}</S.TxtCoodenadas>
        </>
      )}
      <S.Button onPress={handleButton}>
        <S.TxtButton>Atualiza Localização</S.TxtButton>
      </S.Button>
      <Maps latitude={latitude} longitude={longitude} />
    </S.Container>
  );
};
