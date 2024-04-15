import React from 'react';
import GroceriesScreenUI from './GroceriesScreenUI';
import { groceriesMockData } from '../../mockData/groceries';
import { ListItemType } from '../../constants/listItemType';

const MemoizedGroceriesScreenUI = React.memo(GroceriesScreenUI);

const GroceriesScreenContainer = () => {
  const data: ListItemType[] = groceriesMockData;

  const deleteItem = (id: string, type: 'grocery' | 'pharmacy') => {
    // You'll need to make an API call eventually
    // For now...
    console.log('id recd by deleteItem function', id);
    console.log('type recd by deleteItem function', type);
  };

  return <MemoizedGroceriesScreenUI data={data} deleteItem={deleteItem} />;
};

export default GroceriesScreenContainer;
