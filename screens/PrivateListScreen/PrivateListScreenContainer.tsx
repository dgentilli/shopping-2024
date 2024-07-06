import React from 'react';
import PrivateListScreenUI from './PrivateListScreenUI';

const MemoizedPrivateListScreenUI = React.memo(PrivateListScreenUI);

const PrivateListScreenContainer = () => {
  return <MemoizedPrivateListScreenUI />;
};

export default PrivateListScreenContainer;
