import React from 'react';
import GroceriesScreenUI from './GroceriesScreenUI';
import { groceriesMockData } from '../../mockData/groceries';
import { ListItemType } from '../../constants/listItemType';

const MemoizedGroceriesScreenUI = React.memo(GroceriesScreenUI);

const GroceriesScreenContainer = () => {
  const data: ListItemType[] = groceriesMockData;

  return <MemoizedGroceriesScreenUI data={data} />;
};

export default GroceriesScreenContainer;
