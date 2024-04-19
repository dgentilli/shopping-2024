import MainNavigator from './navigation/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import AuthNavigator from './navigation/AuthNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { firebaseConfig } from './firebaseConfig';

type UserObject = {
  id: string;
};

initializeApp(firebaseConfig);

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
