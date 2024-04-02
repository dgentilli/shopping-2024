import { SignupStep } from '../../constants/signup';
import Button from '../Button';
import ScreenWrapper from '../../baseComponents/ScreenWrapper';
import { ButtonTypes } from '../../constants/buttonTypes';

interface VerifyEmailScreenProps {
  setStep: (step: SignupStep) => void;
}

const VerifyEmail = (props: VerifyEmailScreenProps) => {
  const { setStep } = props;

  return (
    <ScreenWrapper title='Verify Email'>
      <Button
        type={ButtonTypes.PRIMARY}
        title='Open Email App'
        onPress={() => setStep(SignupStep.SELECT_HOUSEHOLD)}
      />
    </ScreenWrapper>
  );
};

export default VerifyEmail;
