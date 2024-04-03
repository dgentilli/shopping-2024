import { createStackNavigator } from '@react-navigation/stack';

import SignupScreenContainer from '../screens/SignupScreen/SignupScreenContainer';
import SigninScreenContainer from '../screens/SigninScreen/SigninScreenContainer';
const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Signup' component={SignupScreenContainer} />
      <Stack.Screen name='Signin' component={SigninScreenContainer} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
