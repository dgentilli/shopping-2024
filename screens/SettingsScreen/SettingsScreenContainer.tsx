import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Clipboard from 'expo-clipboard';
import SettingsScreenUI from './SettingsScreenUI';
import useAuth from '../../hooks/useAuth';
import useHousehold from '../../hooks/useHousehold';

const MemoizedSettingsScreenUI = React.memo(SettingsScreenUI);

const SettingsScreenContainer = () => {
  const { logout, currentUser } = useAuth();
  const { household } = useHousehold(currentUser?.uid || '');
  const householdShareCode = household?.householdData?.shareCode;
  const navigation = useNavigation<any>();

  const onPressLogout = () => {
    logout();
  };

  const onPressPrivateList = () => {
    navigation.navigate('PrivateList');
  };

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(householdShareCode);
  };

  return (
    <MemoizedSettingsScreenUI
      householdShareCode={householdShareCode}
      onPressLogout={onPressLogout}
      copyToClipboard={copyToClipboard}
      onPressPrivateList={onPressPrivateList}
    />
  );
};

export default SettingsScreenContainer;
