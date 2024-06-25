import { StyleProp, StyleSheet, View } from 'react-native';

interface SettingsRowProps {
  children: JSX.Element[];
  style?: StyleProp<View>;
  justifyContent?: 'space-between' | 'flex-start' | 'flex-end' | 'center';
}

const SettingsRow = (props: SettingsRowProps) => {
  const { children, style, justifyContent = 'space-between' } = props;
  const styleProp = style ? style : {};

  return (
    <View style={[styles.rowWrapper, { justifyContent }, styleProp]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  rowWrapper: {
    flexDirection: 'row',
    height: 75,
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
});

export default SettingsRow;
