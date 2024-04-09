import { SignupStep } from '../../constants/signup';
import AuthScreenWrapper from '../../baseComponents/AuthScreenWrapper';
import { Text, View } from 'react-native';

interface SignupSuccessProps {
  setStep: (step: SignupStep) => void;
}

const SignupSuccess = (props: SignupSuccessProps) => {
  const { setStep } = props;

  return (
    <AuthScreenWrapper
      title='Success! Account Created!'
      ctaTitle='Get Started'
      ctaCallback={() => {}}
    >
      <View>
        <Text>UI Elements Go Here</Text>
      </View>
    </AuthScreenWrapper>
  );
};

export default SignupSuccess;
