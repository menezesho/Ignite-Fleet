import React, { useEffect, useState } from 'react';
import { LocationAccuracy, useForegroundPermissions, watchPositionAsync, LocationSubscription } from 'expo-location';
import { Linking, Platform } from 'react-native';
import { getAddressLocation } from '@utils/getAddressLoation';
import { Container, Message, Slogan, Title } from './styles';
import { Button } from '@components/Button';
import { Loading } from '@components/Loading';

export function Home() {
  const [locationForegroundPermission, requestLocationForegroundPermission] = useForegroundPermissions();
  const [isLoadingLocation, setIsLoadingLocation] = useState(true);

  async function handleAllowLocation() {
    try {
      if (Platform.OS === 'android') {
        await Linking.openSettings();
      }
      else {
        const url = 'app-settings:';

        const canOpen = await Linking.canOpenURL(url);

        if (canOpen) {
          await Linking.openSettings();
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    requestLocationForegroundPermission();
  }, []);

  useEffect(() => {
    if (!locationForegroundPermission?.granted) return;

    let subscription: LocationSubscription;

    watchPositionAsync({
      accuracy: LocationAccuracy.High,
      timeInterval: 5000,
    }, (location) => {
      getAddressLocation(location.coords).then((address) => {
        console.log(address);
      }).finally(() => setIsLoadingLocation(false));
    }).then((response) => subscription = response);

    return () => subscription?.remove();
  }, [locationForegroundPermission]);

  if (!locationForegroundPermission?.granted) {
    return (
      <Container>
        <Message>
          Para continuar, é necessário permitir o acesso à localização do dispositivo.
        </Message>

        <Button
          title='Permitir localização'
          onPress={handleAllowLocation}
          style={{ marginTop: 24 }}
        />
      </Container>
    );
  }

  if (isLoadingLocation) {
    return <Loading />;
  }

  return (
    <Container>
      <Title>Ignite Fleet</Title>
      <Slogan>Gestão de uso de veículos</Slogan>
      <Button title='Entrar' />
    </Container>
  );
}