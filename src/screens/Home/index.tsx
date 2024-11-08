import React from 'react';
import { Container, Slogan, Title } from './styles';
import { Button } from '../../components/Button';

import backgroundImg from '../../assets/background.png';

export function Home() {
  return (
    <Container source={backgroundImg}>
      <Title>Ignite Fleet</Title>
      <Slogan>Gestão de uso de veículos</Slogan>
      <Button title='Entrar' />
    </Container>
  );
}