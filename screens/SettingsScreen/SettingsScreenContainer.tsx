import React from 'react';
import SettingsScreenUI from './SettingsScreenUI';
import useAuth from '../../hooks/useAuth';

const MemoizedSettingsScreenUI = React.memo(SettingsScreenUI);

const SettingsScreenContainer = () => {
  const { logout } = useAuth();
  const onPressLogout = () => {
    logout();
  };

  return <MemoizedSettingsScreenUI onPressLogout={onPressLogout} />;
};

export default SettingsScreenContainer;
