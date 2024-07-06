import { createStackNavigator } from '@react-navigation/stack';
import PrivateListScreenContainer from '../screens/PrivateListScreen/PrivateListScreenContainer';
import SettingsScreenContainer from '../screens/SettingsScreen/SettingsScreenContainer';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Settings' component={SettingsScreenContainer} />
      <Stack.Screen name='PrivateList' component={PrivateListScreenContainer} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
