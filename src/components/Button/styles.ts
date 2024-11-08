import styled from 'styled-components/native';
import theme from '@theme/index';

export const Container = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;

  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;

  background-color: ${theme.COLORS.BRAND_MID};
`;

export const Title = styled.Text`
  color: ${theme.COLORS.WHITE};
  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`;

export const Loading = styled.ActivityIndicator.attrs(() => ({
  color: theme.COLORS.BRAND_LIGHT,
}))``;