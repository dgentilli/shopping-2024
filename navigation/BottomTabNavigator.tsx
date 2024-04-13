import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GroceriesScreenContainer from '../screens/GroceriesScreen/GroceriesScreenContainer';
import PharmacyScreenContainer from '../screens/PharmacyScreen/PharmacyScreenContainer';
import SettingsScreenContainer from '../screens/SettingsScreen/SettingsScreenContainer';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Groceries' component={GroceriesScreenContainer} />
      <Tab.Screen name='Pharmacy' component={PharmacyScreenContainer} />
      <Tab.Screen name='Settings' component={SettingsScreenContainer} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
