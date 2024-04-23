import React, { useEffect, useState } from 'react';
import { useSignupLogic } from './SignupScreenLogic';
import SignupScreenUI from './SignupScreenUI';
import useAuth from '../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { SignupStep } from '../../constants/signup';

const MemoizedSignupScreenUI = React.memo(SignupScreenUI);

const SignupScreenContainer = () => {
  const { step, setStep } = useSignupLogic();
  const { currentUser, isEmailVerified, signupWithEmailAndPassword } =
    useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<any>();

  const onPressCreateAccount = async () => {
    try {
      signupWithEmailAndPassword(email, password);
    } catch (error) {
      console.log('error from signup');
    }
  };

  useEffect(() => {
    console.log('currentUser from createAccount', currentUser);
    if (step === SignupStep.CREATE_ACCOUNT && Boolean(currentUser)) {
      setStep(SignupStep.VERIFY_EMAIL);
    }
  }, [currentUser]);

  return (
    <MemoizedSignupScreenUI
      step={step}
      email={email}
      password={password}
      isEmailVerified={isEmailVerified}
      setStep={setStep}
      setEmail={setEmail}
      setPassword={setPassword}
      onPressCreateAccount={onPressCreateAccount}
    />
  );
};

export default SignupScreenContainer;
