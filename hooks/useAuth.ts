import {
  onAuthStateChanged,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

const useAuth = () => {
  const auth = getAuth();
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const signupWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('user from createUserWithEmailAndPassword', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorCode from signup', errorCode);
        console.log('errorMessage from signup', errorMessage);
      });
  };

  const signinWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('user from Sign in', user);
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('signin errorCode', errorCode);
        console.log('signing errorMessage', errorMessage);
      });
  };

  const logout = async () => {
    signOut(auth);
  };

  return {
    currentUser,
    signupWithEmailAndPassword,
    signinWithEmailAndPassword,
    logout,
  };
};

export default useAuth;
