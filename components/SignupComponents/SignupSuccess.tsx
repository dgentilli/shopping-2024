import { SignupStep } from '../../constants/signup';
import ScreenWrapper from '../../baseComponents/ScreenWrapper';
import Button from '../Button';
import { ButtonTypes } from '../../constants/buttonTypes';

interface SignupSuccessProps {
  setStep: (step: SignupStep) => void;
}

const SignupSuccess = (props: SignupSuccessProps) => {
  const { setStep } = props;

  return (
    <ScreenWrapper title='Success! Account Created!'>
      <Button
        type={ButtonTypes.PRIMARY}
        title='Get Started'
        onPress={() => {}}
      />
    </ScreenWrapper>
  );
};

export default SignupSuccess;
