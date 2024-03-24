import { createStackNavigator } from '@react-navigation/stack';
import SignupScreenUI from './screens/SignupScreen/SignupScreenUI';
import SigninScreenUI from './screens/SigninScreen/SigninScreenUI';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Signup' component={SignupScreenUI} />
      <Stack.Screen name='Signin' component={SigninScreenUI} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
