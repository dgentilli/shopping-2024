import { SignupStep } from '../../constants/signup';
import ScreenWrapper from '../../baseComponents/ScreenWrapper';
import { Text, View } from 'react-native';

interface SelectHouseholdProps {
  setStep: (step: SignupStep) => void;
}

const SelectHousehold = (props: SelectHouseholdProps) => {
  const { setStep } = props;

  return (
    <ScreenWrapper
      title='Select Household'
      ctaTitle='Next'
      ctaCallback={() => setStep(SignupStep.SIGNUP_SUCCESS)}
    >
      <View>
        <Text>UI Elements Go Here</Text>
      </View>
    </ScreenWrapper>
  );
};

export default SelectHousehold;
