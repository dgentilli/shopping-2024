import { createStackNavigator } from '@react-navigation/stack';
import PrivateListScreenContainer from '../screens/PrivateListScreen/PrivateListScreenContainer';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Main'
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='PrivateList'
        component={PrivateListScreenContainer}
        options={{ headerTintColor: '#6c63ff', headerBackTitle: 'Back' }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
