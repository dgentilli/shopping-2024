import { StyleSheet, View } from 'react-native';

interface SpacerProps {
  height?: number;
}

const Spacer = (props: SpacerProps) => {
  const { height = 10 } = props;

  return <View style={[styles.spacer, { height }]} />;
};

const styles = StyleSheet.create({
  spacer: {
    width: '100%',
    backgroundColor: 'transparent',
  },
});

export default Spacer;
