import {useState, useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {ICoordenadas} from '../../types/coordenadas';

export const useGeolocation = () => {
  const [update, setUpdate] = useState(false);
  const [coordenadas, setCoordenadas] = useState<ICoordenadas>({
    latitude: 0,
    longitude: 0,
    erro: '',
  });

  const handleUpdate = () => {
    setUpdate(!update);
  };

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setCoordenadas({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          erro: '',
        });
      },
      error => {
        setCoordenadas({
          latitude: 0,
          longitude: 0,
          erro: error.message,
        });
      },
      {
        enableHighAccuracy: false,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  }, [update]);
  return {...coordenadas, handleUpdate};
};
