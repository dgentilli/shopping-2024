import React, { useEffect, useState } from 'react';
import SignupScreenUI from './SignupScreenUI';
import useAuth from '../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { SignupStep } from '../../constants/signup';
import useAppState from '../../hooks/useAppState';
import Validator from '../../services/Validator';

const MemoizedSignupScreenUI = React.memo(SignupScreenUI);

const SignupScreenContainer = () => {
  const [step, setStep] = useState(SignupStep.CREATE_ACCOUNT);
  const {
    currentUser,
    isEmailVerified,
    authError,
    signupWithEmailAndPassword,
    checkEmailVerificationStatus,
  } = useAuth();
  const { currentAppState, onForeground } = useAppState();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [householdCode, sethouseholdCode] = useState('');
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

  const validatePasswordField = (password: string) => {
    setPasswordError(Validator.validatePassword(password));
  };

  const onSelectHousehold = (householdCode: string) => {
    // if !code.length - generate a new household
    // generate a share code
    // create a new household and push it to the DB
    // the newly created houshold should also have a userId with the user's current id
    // and the share code
    // handle an error and display message if needed
    // if code.length
    // check db for the code to see if it exists
    // if it exists, add the user to the household
    // if it doesn't exist display an error message
    //once there are no errors, navigate to the next screen
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
      authError={authError}
      passwordError={passwordError}
      setStep={setStep}
      setEmail={setEmail}
      setPassword={setPassword}
      onPressCreateAccount={onPressCreateAccount}
      validateEmailField={validateEmailField}
      validatePasswordField={validatePasswordField}
    />
  );
};

export default SignupScreenContainer;
