import React from 'react';
import { useSignupLogic } from './SignupScreenLogic';
import SignupScreenUI from './SignupScreenUI';

const MemoizedSignupScreenUI = React.memo(SignupScreenUI);

const SignupScreenContainer = () => {
  const { step } = useSignupLogic();
  console.log('step from container', step);

  return <MemoizedSignupScreenUI step={step} />;
};

export default SignupScreenContainer;
