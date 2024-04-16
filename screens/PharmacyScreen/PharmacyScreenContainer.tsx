import React from 'react';
import PharmacyScreenUI from './PharmacyScreenUI';
import { pharmacyMockData } from '../../mockData/pharmacy';
import { ListItemType } from '../../constants/listItemType';

const MemoizedPharmacyScreenUI = React.memo(PharmacyScreenUI);

const PharmacyScreenContainer = () => {
  const data: ListItemType[] = pharmacyMockData;

  const deleteItem = (id: string, type: 'grocery' | 'pharmacy') => {
    // You'll need to make an API call eventually
    // For now...
    console.log('id recd by deleteItem function', id);
    console.log('type recd by deleteItem function', type);
  };

  return <MemoizedPharmacyScreenUI data={data} deleteItem={deleteItem} />;
};

export default PharmacyScreenContainer;
