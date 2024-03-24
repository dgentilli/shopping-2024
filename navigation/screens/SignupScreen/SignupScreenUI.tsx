import { View, Text } from 'react-native';
import { SignupStep } from '../../../constants/signup';
import CreateAccountScreenUI from '../CreateAccountScreen/CreateAccountScreenUI';
import VerifyEmailScreenUI from '../VerifyEmailScreen/VerifyEmailScreenUI';
import SelectHouseholdScreenUI from '../SelectHouseholdScreen/SelectHouseholdScreenUI';
import SignupSuccessScreenUI from '../SignupSuccessScreen/SignupSuccessScreenUI';

interface SignupScreenProps {
  step: SignupStep;
}

const SignupScreenUI = (props: SignupScreenProps) => {
  const { step } = props;
  console.log('step from contorller', step);

  // sign up flow
  // screen 1: choose signup method Google or Username / password
  //// needs logic to take input from user and send to firebase
  // screen 2: verify email addresss
  //// only needs one onPress function - a button that opens the user's email inbox
  // screen 3: Join an existing household or create a new one
  //// needs logic to take an input from the user and send it to my backend
  // screen 4: end of signup flow, see a success method.
  //// if it's creation of a new household, you will see the new id and nickname
  //// if it's an existing household they will see the id and nickname
  //// needs logic to retrieve either the newly created household id or display the current one.
  // Go to Groceries

  switch (step) {
    case SignupStep.CREATE_ACCOUNT:
      return <CreateAccountScreenUI />;
    case SignupStep.VERIFY_EMAIL:
      return <VerifyEmailScreenUI />;
    case SignupStep.SELECT_HOUSEHOLD:
      return <SelectHouseholdScreenUI />;
    case SignupStep.SIGNUP_SUCCESS:
      return <SignupSuccessScreenUI />;
    default:
      return <CreateAccountScreenUI />;
  }
};

export default SignupScreenUI;
