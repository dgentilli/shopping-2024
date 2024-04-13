import React from 'react';
import SettingsScreenUI from './SettingsScreenUI';

const MemoizedSettingsScreenUI = React.memo(SettingsScreenUI);

const SettingsScreenContainer = () => {
  return <MemoizedSettingsScreenUI />;
};

export default SettingsScreenContainer;
