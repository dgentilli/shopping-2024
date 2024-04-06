import { SignupStep } from '../../constants/signup';
import ScreenWrapper from '../../baseComponents/ScreenWrapper';
import { Text, View } from 'react-native';

interface SignupSuccessProps {
  setStep: (step: SignupStep) => void;
}

const SignupSuccess = (props: SignupSuccessProps) => {
  const { setStep } = props;

  return (
    <ScreenWrapper
      title='Success! Account Created!'
      ctaTitle='Get Started'
      ctaCallback={() => {}}
    >
      <View>
        <Text>UI Elements Go Here</Text>
      </View>
    </ScreenWrapper>
  );
};

export default SignupSuccess;
