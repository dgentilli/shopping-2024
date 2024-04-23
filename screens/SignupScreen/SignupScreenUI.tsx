import { SignupStep } from '../../constants/signup';
import CreateAccount from '../../components/SignupComponents/CreateAccount';
import VerifyEmail from '../../components/SignupComponents/VerifyEmail';
import SelectHousehold from '../../components/SignupComponents/SelectHouseHold';
import SignupSuccess from '../../components/SignupComponents/SignupSuccess';
import { View } from 'react-native';

interface SignupScreenProps {
  step: SignupStep;
  email: string;
  password: string;
  isEmailVerified: boolean;
  setEmail: (input: string) => void;
  setPassword: (input: string) => void;
  setStep: (step: SignupStep) => void;
  onPressCreateAccount: () => void;
}

const SignupScreenUI = (props: SignupScreenProps) => {
  const {
    step,
    email,
    password,
    isEmailVerified,
    setStep,
    setEmail,
    setPassword,
    onPressCreateAccount,
  } = props;

  const renderScreen = () => {
    switch (step) {
      case SignupStep.CREATE_ACCOUNT:
        return (
          <CreateAccount
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            onPressCreateAccount={onPressCreateAccount}
          />
        );
      case SignupStep.VERIFY_EMAIL:
        return (
          <VerifyEmail isEmailVerified={isEmailVerified} setStep={setStep} />
        );
      case SignupStep.SELECT_HOUSEHOLD:
        return <SelectHousehold setStep={setStep} />;
      case SignupStep.SIGNUP_SUCCESS:
        return <SignupSuccess />;
      default:
        return (
          <CreateAccount
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            onPressCreateAccount={onPressCreateAccount}
          />
        );
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      {renderScreen()}
    </View>
  );
};

export default SignupScreenUI;
