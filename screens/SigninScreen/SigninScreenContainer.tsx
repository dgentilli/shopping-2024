import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import SigninScreenUI from './SigninScreenUI';
import { useNavigation } from '@react-navigation/native';
const MemoizedSignupScreenUI = React.memo(SigninScreenUI);

const SigninScreenContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<any>();
  // To Do: Add TS to the navigation
  const auth = getAuth();

  const onPressLink = () => {
    navigation.navigate('Signup');
  };

  const onPressCtaButton = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('user from Sign in', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('signin errorCode', errorCode);
        console.log('signing errorMessage', errorMessage);
      });
  };

  return (
    <MemoizedSignupScreenUI
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onPressCtaButton={onPressCtaButton}
      onPressLink={onPressLink}
    />
  );
};

export default SigninScreenContainer;
