import { useEffect } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import Spacer from './Spacer';
import Button from './Button';
import { ButtonTypes } from '../constants/buttonTypes';
import { useKeyboardState } from '../hooks/useKeyboardState';

interface AuthScreenWrapperProps {
  title: string;
  children: any;
  ctaTitle: string;
  isButtonDisabled?: boolean;
  ctaCallback: () => void;
}

const AuthScreenWrapper = (props: AuthScreenWrapperProps) => {
  const {
    title,
    children,
    isButtonDisabled = false,
    ctaTitle,
    ctaCallback,
  } = props;
  const { isKeyboardVisible } = useKeyboardState();
  const translateX = new Animated.Value(500);

  const getButtonPosition = (): {
    position: 'absolute' | 'relative' | undefined;
    bottom: number;
  } => {
    return isKeyboardVisible
      ? { position: 'absolute', bottom: -500 }
      : { position: 'absolute', bottom: 100 };
  };

  const slideIn = () => {
    Animated.spring(translateX, {
      toValue: 0,
      useNativeDriver: true,
      bounciness: 2,
      speed: 10,
    }).start();
  };

  const interpolatedStyle = {
    transform: [{ translateX }],
  };

  useEffect(() => {
    slideIn();
  }, [title]);

  return (
    <Animated.View style={[styles.container, interpolatedStyle]}>
      <Text style={styles.title}>{title}</Text>

      <Spacer height={100} />

      {children}

      <View style={[styles.buttonWrapper, getButtonPosition()]}>
        <Button
          type={ButtonTypes.PRIMARY}
          title={ctaTitle}
          isDisabled={isButtonDisabled}
          onPress={ctaCallback}
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    color: '#2f2e41',
  },
  buttonWrapper: {
    width: '100%',
  },
});

export default AuthScreenWrapper;
