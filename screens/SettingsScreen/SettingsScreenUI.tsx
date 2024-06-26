import { View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Clipboard from 'expo-clipboard';
import Button from '../../baseComponents/Button';
import { ButtonTypes } from '../../constants/buttonTypes';
import Spacer from '../../baseComponents/Spacer';
import SettingsRow from '../../components/SettingsComponents/SettingsRow';
import { truncateText } from '../../helpers/stringHelpers';
import useHouseholdStore from '../../state/household';

interface SettingsScreenProps {
  onPressLogout: () => void;
}

const SettingsScreenUI = (props: SettingsScreenProps) => {
  const { onPressLogout } = props;
  const { householdShareCode } = useHouseholdStore();
  const truncatedText = truncateText(householdShareCode, 20);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(householdShareCode);
  };

  return (
    <View style={styles.container}>
      <SettingsRow justifyContent={'space-between'}>
        <Text style={styles.rowTitleText}>Share Code</Text>
        <Text numberOfLines={1}>{truncatedText}</Text>
        <Pressable
          onPress={copyToClipboard}
          style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
        >
          <Ionicons name='copy' size={20} color='#2f2e41' />
        </Pressable>
      </SettingsRow>
      <SettingsRow>
        <Text style={styles.rowTitleText}>Theme</Text>
        <Text>Light</Text>
      </SettingsRow>
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
  rowTitleText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#6c63ff',
  },
});

export default SettingsScreenUI;
