import { SignupStep } from '../../constants/signup';
import CreateAccount from '../../components/SignupComponents/CreateAccount';
import VerifyEmail from '../../components/SignupComponents/VerifyEmail';
import SelectHousehold from '../../components/SignupComponents/SelectHouseHold';
import SignupSuccess from '../../components/SignupComponents/SignupSuccess';

interface SignupScreenProps {
  step: SignupStep;
  setStep: (step: SignupStep) => void;
}

const SignupScreenUI = (props: SignupScreenProps) => {
  const { step, setStep } = props;
  console.log('step from signup ui', step);

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
      return <CreateAccount setStep={setStep} />;
    case SignupStep.VERIFY_EMAIL:
      return <VerifyEmail setStep={setStep} />;
    case SignupStep.SELECT_HOUSEHOLD:
      return <SelectHousehold setStep={setStep} />;
    case SignupStep.SIGNUP_SUCCESS:
      return <SignupSuccess setStep={setStep} />;
    default:
      return <CreateAccount setStep={setStep} />;
  }
};

export default SignupScreenUI;
