import React, { useEffect, useState } from 'react';
import { useSignupLogic } from './SignupScreenLogic';
import SignupScreenUI from './SignupScreenUI';
import useAuth from '../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { SignupStep } from '../../constants/signup';
import useAppState from '../../hooks/useAppState';
import Validator from '../../services/Validator';

const MemoizedSignupScreenUI = React.memo(SignupScreenUI);

const SignupScreenContainer = () => {
  const { step, setStep } = useSignupLogic();
  const {
    currentUser,
    isEmailVerified,
    signupWithEmailAndPassword,
    checkEmailVerificationStatus,
  } = useAuth();
  const { currentAppState, onForeground } = useAppState();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<any>();

  const onPressCreateAccount = async () => {
    try {
      signupWithEmailAndPassword(email, password);
    } catch (error) {
      console.log('error from signup');
    }
  };

  const validateEmailField = (email: string) => {
    setEmailError(Validator.validateEmailAddress(email));
  };

  useEffect(() => {
    if (step === SignupStep.CREATE_ACCOUNT && Boolean(currentUser)) {
      setStep(SignupStep.VERIFY_EMAIL);
    }
  }, [currentUser]);

  useEffect(() => {
    const handleForeground = () => {
      checkEmailVerificationStatus();
    };
    const unsubscribe = onForeground(handleForeground);

    return () => unsubscribe;
  }, [currentAppState]);

  return (
    <MemoizedSignupScreenUI
      step={step}
      email={email}
      password={password}
      isEmailVerified={isEmailVerified}
      emailError={emailError}
      setStep={setStep}
      setEmail={setEmail}
      setPassword={setPassword}
      onPressCreateAccount={onPressCreateAccount}
      validateEmailField={validateEmailField}
    />
  );
};

export default SignupScreenContainer;
