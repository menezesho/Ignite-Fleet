import React from 'react';
import { Container, Loading, Title } from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = & TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
}

export function Button(props: Props) {
  const { title, isLoading = false, ...rest} = props;
  return (
    <Container
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? <Loading /> : <Title>{title}</Title>}
    </Container>
  );
}