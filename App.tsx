import MainNavigator from './navigation/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import AuthNavigator from './navigation/AuthNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

type UserObject = {
  id: string;
};

export default function App() {
  const [user, setUser] = useState<undefined | UserObject>(undefined);
  // TO DO: Add Firebase Auth for setting the user

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        {user ? <MainNavigator /> : <AuthNavigator />}
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
