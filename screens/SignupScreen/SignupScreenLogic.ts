// get the signup step from redux state
// pass the signup step as a prop
import { useState } from 'react';
import { SignupStep } from '../../../constants/signup';

export const useSignupLogic = () => {
  const [step, setStep] = useState(SignupStep.CREATE_ACCOUNT);

  return { step, setStep };
};
