import React, { useEffect } from 'react';
import { useForegroundPermissions } from 'expo-location';
import { Linking, Platform } from 'react-native';
import { Container, Message, Slogan, Title } from './styles';
import { Button } from '@components/Button';

export function Home() {
  const [locationForegroundPermission, requestLocationForegroundPermission] = useForegroundPermissions();

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

  return (
    <Container>
      <Title>Ignite Fleet</Title>
      <Slogan>Gestão de uso de veículos</Slogan>
      <Button title='Entrar' />
    </Container>
  );
}