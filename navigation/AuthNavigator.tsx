import { createStackNavigator } from '@react-navigation/stack';
import SigninScreenUI from './screens/SigninScreen/SigninScreenUI';
import SignupScreenContainer from './screens/SignupScreen/SignupScreenContainer';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Signup' component={SignupScreenContainer} />
      <Stack.Screen name='Signin' component={SigninScreenUI} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
