import { View, Text } from 'react-native';
import { SignupStep } from '../../constants/signup';

interface SignupSuccessProps {
  setStep: (step: SignupStep) => void;
}

const SignupSuccess = (props: SignupSuccessProps) => {
  const { setStep } = props;

  return (
    <View>
      <Text>SignupSuccess</Text>
    </View>
  );
};

export default SignupSuccess;
