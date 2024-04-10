import { StyleSheet, Text } from 'react-native';

interface ParagraphTextProps {
  children: any;
}

const ParagraphText = (props: ParagraphTextProps) => {
  const { children } = props;

  return <Text style={styles.paragraphText}>{children}</Text>;
};

const styles = StyleSheet.create({
  paragraphText: {
    color: '#2f2e41',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default ParagraphText;
