import MainNavigator from './navigation/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import AuthNavigator from './navigation/AuthNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { firebaseConfig } from './firebaseConfig';
import { getFirestore } from 'firebase/firestore';
import useAuth from './hooks/useAuth';
import useUserStore from './state/user';
import { SheetProvider } from 'react-native-actions-sheet';
import { setupSheets } from './sheets';
import BottomTabNavigator from './navigation/BottomTabNavigator';

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

setupSheets();

export default function App() {
  const { currentUser } = useAuth();
  const { isSignupComplete } = useUserStore();

  return (
    <SheetProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          {currentUser && isSignupComplete ? (
            <BottomTabNavigator />
          ) : (
            <AuthNavigator />
          )}
        </SafeAreaProvider>
      </NavigationContainer>
    </SheetProvider>
  );
}
