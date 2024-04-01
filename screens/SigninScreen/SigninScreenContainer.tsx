import React from 'react';
import SigninScreenUI from './SigninScreenUI';
const MemoizedSignupScreenUI = React.memo(SigninScreenUI);

const SigninScreenContainer = () => {
  return <MemoizedSignupScreenUI />;
};

export default SigninScreenContainer;
