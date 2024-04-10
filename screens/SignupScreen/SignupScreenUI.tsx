import { SignupStep } from '../../constants/signup';
import CreateAccount from '../../components/SignupComponents/CreateAccount';
import VerifyEmail from '../../components/SignupComponents/VerifyEmail';
import SelectHousehold from '../../components/SignupComponents/SelectHouseHold';
import SignupSuccess from '../../components/SignupComponents/SignupSuccess';
import { View } from 'react-native';

interface SignupScreenProps {
  step: SignupStep;
  setStep: (step: SignupStep) => void;
}

const SignupScreenUI = (props: SignupScreenProps) => {
  const { step, setStep } = props;

  const renderScreen = () => {
    switch (step) {
      case SignupStep.CREATE_ACCOUNT:
        return <CreateAccount setStep={setStep} />;
      case SignupStep.VERIFY_EMAIL:
        return <VerifyEmail setStep={setStep} />;
      case SignupStep.SELECT_HOUSEHOLD:
        return <SelectHousehold setStep={setStep} />;
      case SignupStep.SIGNUP_SUCCESS:
        return <SignupSuccess />;
      default:
        return <CreateAccount setStep={setStep} />;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      {renderScreen()}
    </View>
  );
};

export default SignupScreenUI;
