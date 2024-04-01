import { Pressable, StyleSheet, Text } from 'react-native';
import { ButtonTypes } from '../constants/buttonTypes';

interface ButtonProps {
  type: ButtonTypes;
  title: string;
  onPress: () => void;
}

const Button = (props: ButtonProps) => {
  const { type, title, onPress } = props;

  const getButtonStyle = () => {
    if (type === ButtonTypes.PRIMARY) {
      return styles.buttonPrimary;
    }
  };

  const getButtonTextStyle = () => {
    if (type === ButtonTypes.PRIMARY) {
      return styles.buttonPrimaryText;
    }
  };

  return (
    <Pressable
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1 },
        styles.buttonBase,
        getButtonStyle(),
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonBaseText, getButtonTextStyle()]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonBase: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  buttonPrimary: {
    height: 75,
    width: '100%',
    backgroundColor: '#6c63ff',
  },
  buttonBaseText: {
    fontSize: 20,
  },
  buttonPrimaryText: {
    color: '#ffffff',
  },
});

export default Button;
