import { View, Text } from 'react-native';
import { SignupStep } from '../../constants/signup';
import Button from '../Button';
import { ButtonTypes } from '../../constants/buttonTypes';

interface VerifyEmailScreenProps {
  setStep: (step: SignupStep) => void;
}

const VerifyEmail = (props: VerifyEmailScreenProps) => {
  const { setStep } = props;

  return (
    <View>
      <Text>VerifyEmailScreenUI</Text>
      <Button
        type={ButtonTypes.PRIMARY}
        title='Next'
        onPress={() => setStep(SignupStep.SELECT_HOUSEHOLD)}
      />
    </View>
  );
};

export default VerifyEmail;
