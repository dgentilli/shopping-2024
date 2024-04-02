import { SignupStep } from '../../constants/signup';
import Button from '../Button';
import { ButtonTypes } from '../../constants/buttonTypes';
import ScreenWrapper from '../../baseComponents/ScreenWrapper';

interface SelectHouseholdProps {
  setStep: (step: SignupStep) => void;
}

const SelectHousehold = (props: SelectHouseholdProps) => {
  const { setStep } = props;

  return (
    <ScreenWrapper title='Select Household'>
      <Button
        type={ButtonTypes.PRIMARY}
        title='Next'
        onPress={() => setStep(SignupStep.SIGNUP_SUCCESS)}
      />
    </ScreenWrapper>
  );
};

export default SelectHousehold;
