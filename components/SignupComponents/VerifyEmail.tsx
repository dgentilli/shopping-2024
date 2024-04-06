import { SignupStep } from '../../constants/signup';
import ScreenWrapper from '../../baseComponents/ScreenWrapper';
import { Text, View } from 'react-native';

interface VerifyEmailScreenProps {
  setStep: (step: SignupStep) => void;
}

const VerifyEmail = (props: VerifyEmailScreenProps) => {
  const { setStep } = props;

  return (
    <ScreenWrapper
      title='Verify Email'
      ctaTitle='Open EmailApp'
      ctaCallback={() => setStep(SignupStep.SELECT_HOUSEHOLD)}
    >
      <View>
        <Text>UI Elements Go Here</Text>
      </View>
    </ScreenWrapper>
  );
};

export default VerifyEmail;
