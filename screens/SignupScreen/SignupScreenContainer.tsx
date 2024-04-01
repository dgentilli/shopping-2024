import React from 'react';
import { useSignupLogic } from './SignupScreenLogic';
import SignupScreenUI from './SignupScreenUI';

const MemoizedSignupScreenUI = React.memo(SignupScreenUI);

const SignupScreenContainer = () => {
  const { step, setStep } = useSignupLogic();

  return <MemoizedSignupScreenUI step={step} setStep={setStep} />;
};

export default SignupScreenContainer;
