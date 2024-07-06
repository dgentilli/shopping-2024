import { View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Button from '../../baseComponents/Button';
import { ButtonTypes } from '../../constants/buttonTypes';
import Spacer from '../../baseComponents/Spacer';
import SettingsRow from '../../components/SettingsComponents/SettingsRow';
import { truncateText } from '../../helpers/stringHelpers';
import Link from '../../baseComponents/Link';

interface SettingsScreenProps {
  householdShareCode: string | undefined;
  onPressLogout: () => void;
  copyToClipboard: () => void;
  onPressPrivateList: () => void;
}

const SettingsScreenUI = (props: SettingsScreenProps) => {
  const {
    householdShareCode,
    onPressLogout,
    copyToClipboard,
    onPressPrivateList,
  } = props;

  const truncatedText = truncateText(householdShareCode, 20);

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
        <Text style={styles.rowTitleText}>My Private List</Text>
        <Link text='Go To List' onPress={onPressPrivateList} />
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
