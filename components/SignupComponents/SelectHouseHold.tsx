import { SignupStep } from '../../constants/signup';
import AuthScreenWrapper from '../../baseComponents/AuthScreenWrapper';
import { Text, View } from 'react-native';

interface SelectHouseholdProps {
  setStep: (step: SignupStep) => void;
}

const SelectHousehold = (props: SelectHouseholdProps) => {
  const { setStep } = props;

  return (
    <AuthScreenWrapper
      title='Select Household'
      ctaTitle='Next'
      ctaCallback={() => setStep(SignupStep.SIGNUP_SUCCESS)}
    >
      <View>
        <Text>UI Elements Go Here</Text>
      </View>
    </AuthScreenWrapper>
  );
};

export default SelectHousehold;
