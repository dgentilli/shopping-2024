import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import Spacer from './Spacer';

interface ScreenWrapperProps {
  title: string;
  children: any;
}

const ScreenWrapper = (props: ScreenWrapperProps) => {
  const { title, children } = props;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Spacer height={100} />

      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    color: '#2f2e41',
  },
});

export default ScreenWrapper;
