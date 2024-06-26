import { Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface CountButtonProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CountButton = (props: CountButtonProps) => {
  const { count, increment, decrement } = props;

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.textWrapper} onPress={increment}>
        <Ionicons name='chevron-up-circle' size={40} color='#6c63ff' />
      </Pressable>
      <View style={styles.textWrapper}>
        <Text style={styles.count}>0</Text>
      </View>
      <Pressable style={styles.textWrapper} onPress={decrement}>
        <Ionicons name='chevron-down-circle' size={40} color='#6c63ff' />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    height: 75,
    borderWidth: 1,
    borderColor: '#e6e6e6',
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    fontSize: 40,
    fontWeight: '500',
    color: '#2f2e41',
  },
  CountText: {},
});

export default CountButton;
