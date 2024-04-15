import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Spacer from './Spacer';

const EmptyList = () => {
  return (
    <View style={styles.wrapper}>
      <Ionicons name='folder-open' size={60} color='#2f2e41' />
      <Spacer height={30} />
      <Text style={styles.text}>No Items To Display</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: '30%',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#2f2e41',
  },
});

export default EmptyList;
