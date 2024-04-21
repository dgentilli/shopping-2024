import { Pressable, StyleSheet, Text } from 'react-native';

interface LinkProps {
  text: string;
  onPress: () => void;
}

const Link = (props: LinkProps) => {
  const { text, onPress } = props;

  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: '#6c63ff',
    fontWeight: '500',
  },
});

export default Link;
