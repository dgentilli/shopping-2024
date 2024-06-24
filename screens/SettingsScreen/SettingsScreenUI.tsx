import { View, Text, StyleSheet } from 'react-native';
import Button from '../../baseComponents/Button';
import { ButtonTypes } from '../../constants/buttonTypes';
import Spacer from '../../baseComponents/Spacer';

interface SettingsScreenProps {
  onPressLogout: () => void;
}

const SettingsScreenUI = (props: SettingsScreenProps) => {
  const { onPressLogout } = props;

  return (
    <View style={styles.container}>
      <Spacer height={25} />
      <Button
        onPress={onPressLogout}
        title='Logout'
        type={ButtonTypes.PRIMARY}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
});

export default SettingsScreenUI;
