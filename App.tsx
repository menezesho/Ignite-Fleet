import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { StatusBar } from 'react-native';

import { Loading } from './src/components/Loading';
import { SignIn } from './src/screens/SignIn';

import theme from './src/theme';

export default function App() {
  const [isFontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  
  if (!isFontsLoaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <SignIn />
    </ThemeProvider>
  );
}
