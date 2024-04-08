import { Animated, StyleSheet, Text, View } from 'react-native';
import Spacer from './Spacer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonTypes } from '../constants/buttonTypes';
import Button from '../components/Button';
import { useEffect, useRef } from 'react';
interface ScreenWrapperProps {
  title: string;
  children: any;
  ctaTitle: string;
  ctaCallback: () => void;
}

const ScreenWrapper = (props: ScreenWrapperProps) => {
  const { title, children, ctaCallback, ctaTitle } = props;

  const translateX = new Animated.Value(500);

  const slideIn = () => {
    Animated.spring(translateX, {
      toValue: 0,
      useNativeDriver: true,
      bounciness: 2,
      speed: 10,
    }).start();
  };

  useEffect(() => {
    slideIn();
  }, [title]);

  const interpolatedStyle = {
    transform: [{ translateX }],
  };

  return (
    <Animated.View style={[styles.container, interpolatedStyle]}>
      <Text style={styles.title}>{title}</Text>

      <Spacer height={100} />

      {children}

      <View style={styles.buttonWrapper}>
        <Button
          type={ButtonTypes.PRIMARY}
          title={ctaTitle}
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
    position: 'absolute',
    bottom: 100,
    width: '100%',
  },
});

export default ScreenWrapper;
