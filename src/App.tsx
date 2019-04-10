import { AppLoading, Font } from 'expo';
import * as React from 'react';
import { Platform } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { colors } from './constants/theme';
import ButtonScreen from './screens/ButtonScreen';

class App extends React.Component {
  public state = {
    isLoaded: false,
  };

  public async componentWillMount() {
    const fontName = Platform.OS === 'ios' ? 'Material Icons' : 'MaterialIcons';
    await Font.loadAsync({
      [fontName]: require('@expo/vector-icons/fonts/MaterialIcons.ttf'),
    });
    this.setState({ isLoaded: true });
  }

  public render() {
    const { isLoaded } = this.state;
    const theme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        accent: colors.accent,
        background: colors.background,
      },
      roundness: 2,
    };
    return isLoaded ? (
      <PaperProvider theme={theme}>
        <ButtonScreen />
      </PaperProvider>
    ) : (
      <AppLoading />
    );
  }
}

export default App;
