import * as React from 'react';
import { View } from 'react-native';
import { Button, withTheme } from 'react-native-paper';

interface IColors {
  background: string;
}

interface IProps {
  theme: {
    colors: IColors;
  };
}

const handleButtonPress = () => {
  // tslint:disable-next-line
  console.log('Pressed');
};

const ButtonScreen = ({ theme }: IProps) => {
  const { colors } = theme;
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
      }}>
      <Button dark mode="contained" onPress={() => handleButtonPress()}>
        Ring!
      </Button>
    </View>
  );
};

export default withTheme(ButtonScreen);
