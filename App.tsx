import MainNavigator from './navigation/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import AuthNavigator from './navigation/AuthNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { firebaseConfig } from './firebaseConfig';
import { getFirestore } from 'firebase/firestore';
import useAuth from './hooks/useAuth';
import useUserStore from './state/user';

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default function App() {
  const { currentUser } = useAuth();
  const { isSignupComplete } = useUserStore();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        {currentUser && isSignupComplete ? (
          <MainNavigator />
        ) : (
          <AuthNavigator />
        )}
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
