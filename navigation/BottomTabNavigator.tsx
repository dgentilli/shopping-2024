import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import GroceriesScreenContainer from '../screens/GroceriesScreen/GroceriesScreenContainer';
import PharmacyScreenContainer from '../screens/PharmacyScreen/PharmacyScreenContainer';
import SettingsScreenContainer from '../screens/SettingsScreen/SettingsScreenContainer';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#6c63ff',
        tabBarInactiveTintColor: '#847a85',
      }}
    >
      <Tab.Screen
        name='Groceries'
        component={GroceriesScreenContainer}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'cart' : 'cart-outline'}
              size={size}
              color={color}
            />
          ),
          headerTintColor: '#6c63ff',
          headerTitleStyle: { fontWeight: '300', fontSize: 26 },
        }}
      />
      <Tab.Screen
        name='Pharmacy'
        component={PharmacyScreenContainer}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'medical' : 'medical-outline'}
              size={size}
              color={color}
            />
          ),
          headerTintColor: '#6c63ff',
          headerTitleStyle: { fontWeight: '300', fontSize: 26 },
        }}
      />
      <Tab.Screen
        name='Settings'
        component={SettingsScreenContainer}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'cog-sharp' : 'cog-outline'}
              size={size}
              color={color}
            />
          ),
          headerTintColor: '#6c63ff',
          headerTitleStyle: { fontWeight: '300', fontSize: 26 },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
