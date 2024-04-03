import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GroceriesScreenUI from '../screens/GroceriesScreen/GroceriesScreenUI';
import PharmacyScreenUI from '../screens/PharmacyScreen/PharmacyScreenUI';
import SettingsScreenUI from '../screens/SettingsScreen/SettingsScreenUI';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Groceries' component={GroceriesScreenUI} />
      <Tab.Screen name='Pharmacy' component={PharmacyScreenUI} />
      <Tab.Screen name='Settings' component={SettingsScreenUI} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
