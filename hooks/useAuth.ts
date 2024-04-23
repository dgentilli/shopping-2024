import {
  onAuthStateChanged,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User,
  sendEmailVerification,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

const useAuth = () => {
  const auth = getAuth();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsEmailVerified(Boolean(user?.emailVerified));
    });

    return unsubscribe;
  }, []);

  const sendVerificationEmail = async (user: User) => {
    try {
      await sendEmailVerification(user);
      console.log('Verification email sent to:', user.email);
    } catch (error) {
      console.error('Error sending verification email:', error);
      // Handle error appropriately (e.g., display message to user)
    }
  };

  const signupWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('user from createUserWithEmailAndPassword', user);
        sendVerificationEmail(user);
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
    isEmailVerified,
    signupWithEmailAndPassword,
    signinWithEmailAndPassword,
    logout,
  };
};

export default useAuth;
