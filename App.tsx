import MainNavigator from './navigation/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import AuthNavigator from './navigation/AuthNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { firebaseConfig } from './firebaseConfig';
import { getFirestore } from 'firebase/firestore';
import useAuth from './hooks/useAuth';

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default function App() {
  const { currentUser } = useAuth();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        {currentUser ? <MainNavigator /> : <AuthNavigator />}
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
