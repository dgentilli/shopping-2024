import { View, Text } from 'react-native';
import { SignupStep } from '../../constants/signup';

interface VerifyEmailScreenProps {
  setStep: (step: SignupStep) => void;
}

const VerifyEmail = (props: VerifyEmailScreenProps) => {
  const { setStep } = props;

  return (
    <View>
      <Text>VerifyEmailScreenUI</Text>
    </View>
  );
};

export default VerifyEmail;
