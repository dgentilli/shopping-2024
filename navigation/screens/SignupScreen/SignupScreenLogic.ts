// get the signup step from redux state
// pass the signup step as a prop
import { SignupStep } from '../../../constants/signup';

export const useSignupLogic = () => {
  // eventually this will come from redux
  // we'll use a useSelector hook
  const step = SignupStep.CREATE_ACCOUNT;

  return { step };
};
