import React, { useEffect, useState } from 'react';
import SigninScreenUI from './SigninScreenUI';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../../hooks/useAuth';
import Validator from '../../services/Validator';
const MemoizedSignupScreenUI = React.memo(SigninScreenUI);

const SigninScreenContainer = () => {
  const { signinWithEmailAndPassword, currentUser, authError } = useAuth();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<any>();
  // To Do: Add TS to the navigation
  const onPressLink = () => {
    navigation.navigate('Signup');
  };

  const validateEmailField = (email: string) => {
    setEmailError(Validator.validateEmailAddress(email));
  };

  const onPressCtaButton = () => {
    try {
      signinWithEmailAndPassword(email, password);
    } catch (error) {
      console.log('error from signin screen', error);
    }
  };

  return (
    <MemoizedSignupScreenUI
      email={email}
      password={password}
      emailError={emailError}
      authError={authError}
      setEmail={setEmail}
      setPassword={setPassword}
      onPressCtaButton={onPressCtaButton}
      onPressLink={onPressLink}
      validateEmailField={validateEmailField}
    />
  );
};

export default SigninScreenContainer;
