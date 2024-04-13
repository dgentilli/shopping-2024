import React from 'react';
import PharmacyScreenUI from './PharmacyScreenUI';
import { pharmacyMockData } from '../../mockData/pharmacy';
import { ListItemType } from '../../constants/listItemType';

const MemoizedPharmacyScreenUI = React.memo(PharmacyScreenUI);

const PharmacyScreenContainer = () => {
  const data: ListItemType[] = pharmacyMockData;

  return <MemoizedPharmacyScreenUI data={data} />;
};

export default PharmacyScreenContainer;
